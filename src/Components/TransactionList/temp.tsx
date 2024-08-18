import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Button, Text, TextInput, Alert } from 'react-native';
import { Transaction } from '../../Utils/Types/types';
import { useSQLiteContext } from "expo-sqlite/next";
import { Category } from '../../Utils/Types/types';
import { MaterialIcons } from "@expo/vector-icons";
import Card from '../commonCard/Card';
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

const AddTransaction = ({
  insertTransaction,
}: {
  insertTransaction(transaction: Transaction): Promise<void>;
}) => {
  const [isAddingTransaction, setIsAddingTransaction] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [categories, setCategories] = useState<Category[]>([]);
  const [typeSelected, setTypeSelected] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("Expense");
  const [categoryId, setCategoryId] = useState<number>(1);
  const [isScannerActive, setIsScannerActive] = useState<boolean>(false);
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const db = useSQLiteContext();

  useEffect(() => {
    getExpenseType(currentTab);
  }, [currentTab]);

  async function getExpenseType(currentTab: number) {
    setCategory(currentTab === 0 ? "Expense" : "Income");
    const type = currentTab === 0 ? "Expense" : "Income";

    const result = await db.getAllAsync<Category>(
      `SELECT * FROM Categories WHERE type = ?;`,
      [type]
    );
    setCategories(result);
  }

  async function handleSave() {
    console.log({
      amount: Number(amount),
      description,
      category_id: categoryId,
      date: new Date().getTime() / 1000,
      type: category as "Expense" | "Income",
    });

     // @ts-ignore
    await insertTransaction({
        amount: Number(amount),
        description,
        category_id: categoryId,
        date: new Date().getTime() / 1000,
        type: category as "Expense" | "Income",
    });

    setAmount("");
    setDescription("");
    setCategory("Expense");
    setCategoryId(1);
    setCurrentTab(0);
    setIsAddingTransaction(false);
  }

  const handleBarcodeScanned = ({ data }: { data: string }) => {
    setAmount(data);
    setIsScannerActive(false);
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  return (
    <View style={{ marginBottom: 15 }}>
      {isScannerActive ? (
        <View style={{ flex: 1 }}>
          <CameraView
            style={{ flex: 1 }}
            facing={facing}
            onBarcodeScanned={handleBarcodeScanned}
            barcodeScannerSettings={{
              barcodeTypes: ["qr"], // Adjust barcode types as needed
            }}
          >
            <View>
              <TouchableOpacity
                onPress={() => setIsScannerActive(false)}
                style={{ padding: 20, backgroundColor: 'red' }}
              >
                <Text style={{ color: 'white' }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </CameraView>
        </View>
      ) : (
        isAddingTransaction ? (
          <View>
            <Card>
              <TextInput
                placeholder="$Amount"
                style={{ fontSize: 32, marginBottom: 15, fontWeight: "bold" }}
                keyboardType="numeric"
                value={amount}
                onChangeText={(text) => {
                  const numericValue = text.replace(/[^0-9.]/g, "");
                  setAmount(numericValue);
                }}
              />
              <TextInput
                placeholder="Description"
                style={{ marginBottom: 15 }}
                onChangeText={setDescription}
                value={description}
              />
              <Text style={{ marginBottom: 6 }}>Select a entry type</Text>
              <SegmentedControl
                values={["Expense", "Income"]}
                style={{ marginBottom: 15 }}
                selectedIndex={currentTab}
                onChange={(event) => {
                  setCurrentTab(event.nativeEvent.selectedSegmentIndex);
                }}
              />
              {categories.map((cat) => (
                <CategoryButton
                  key={cat.name}
                  id={cat.id}
                  title={cat.name}
                  isSelected={typeSelected === cat.name}
                  setTypeSelected={setTypeSelected}
                  setCategoryId={setCategoryId}
                />
              ))}
              <TouchableOpacity
                onPress={() => setIsScannerActive(true)}
                style={{
                  marginVertical: 20,
                  padding: 10,
                  backgroundColor: '#007BFF',
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: 'white', textAlign: 'center' }}>Scan Barcode</Text>
              </TouchableOpacity>
            </Card>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
              <Button
                title="Cancel"
                color="red"
                onPress={() => setIsAddingTransaction(false)}
              />
              <Button title="Save" onPress={handleSave} />
            </View>
          </View>
        ) : (
          <AddButton setIsAddingTransaction={setIsAddingTransaction} />
        )
      )}
    </View>
  );
};

function CategoryButton({
  id,
  title,
  isSelected,
  setTypeSelected,
  setCategoryId,
}: {
  id: number;
  title: string;
  isSelected: boolean;
  setTypeSelected: React.Dispatch<React.SetStateAction<string>>;
  setCategoryId: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        setTypeSelected(title);
        setCategoryId(id);
      }}
      activeOpacity={0.6}
      style={{
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isSelected ? "#007BFF20" : "#00000020",
        borderRadius: 15,
        marginBottom: 6,
      }}
    >
      <Text
        style={{
          fontWeight: "700",
          color: isSelected ? "#007BFF" : "#000000",
          marginLeft: 5,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

function AddButton({
  setIsAddingTransaction,
}: {
  setIsAddingTransaction: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <TouchableOpacity
      onPress={() => setIsAddingTransaction(true)}
      activeOpacity={0.6}
      style={{
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#007BFF20",
        borderRadius: 15,
      }}
    >
      <MaterialIcons name="add-circle-outline" size={24} color="#007BFF" />
      <Text style={{ fontWeight: "700", color: "#007BFF", marginLeft: 5 }}>
        New Entry
      </Text>
    </TouchableOpacity>
  );
}

export default AddTransaction;
