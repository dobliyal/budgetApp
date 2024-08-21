import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Transaction } from '../../../../Utils/Types/types';
import { useSQLiteContext } from 'expo-sqlite/next';
import ScannerView from './ScannerView';
import TransactionForm from './TransactionForm';
import AddButton from './AddButton';
import { stylesAddTransaction } from './addTransactionStyle';
import { Category } from '../../../../Utils/Types/types';
const AddTransaction = ({
  insertTransaction,
}: {
  insertTransaction(transaction: Transaction): Promise<void>;
}) => {
  const [isAddingTransaction, setIsAddingTransaction] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [categories, setCategories] = useState<Category[]>([]);
  const [typeSelected, setTypeSelected] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('Expense');
  const [categoryId, setCategoryId] = useState<number>(1);
  const [isScannerActive, setIsScannerActive] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());

  const db = useSQLiteContext();

  useEffect(() => {
    getExpenseType(currentTab);
  }, [currentTab]);

  const getExpenseType = async (currentTab: number) => {
    setCategory(currentTab === 0 ? 'Expense' : 'Income');
    const type = currentTab === 0 ? 'Expense' : 'Income';

    const result = await db.getAllAsync<Category>(
      'SELECT * FROM Categories WHERE type = ?;',
      [type]
    );
    setCategories(result);
  };

  async function handleSave() {
    // @ts-ignore
    await insertTransaction({
      amount: Number(amount),
      description,
      category_id: categoryId,
      date: Math.floor(date.getTime() / 1000),
      type: category as 'Expense' | 'Income',
    });

    setAmount('');
    setDescription('');
    setCategory('Expense');
    setCategoryId(1);
    setCurrentTab(0);
    setIsAddingTransaction(false);
    setTypeSelected('');
  }

  const handleBarcodeScanned = ({ data }: { data: string }) => {
    const parsedData: any = JSON.parse(data);
    setAmount(parsedData.amountQR.toString());
    setDescription(parsedData.descriptionQR);
    setTypeSelected(parsedData.categoryQR);
    setCurrentTab(parsedData.typeQR === 'Expense' ? 0 : 1);
    setIsScannerActive(false);
  };

  return (
    <View style={stylesAddTransaction.container}>
      {isScannerActive ? (
        <ScannerView
          handleBarcodeScanned={handleBarcodeScanned}
          setIsScannerActive={setIsScannerActive}
        />
      ) : isAddingTransaction ? (
        <TransactionForm
          amount={amount}
          description={description}
          categories={categories}
          currentTab={currentTab}
          typeSelected={typeSelected}
          date={date}
          setAmount={setAmount}
          setDescription={setDescription}
          setCurrentTab={setCurrentTab}
          setDate={setDate}
          setIsScannerActive={setIsScannerActive}
          setTypeSelected={setTypeSelected}
          setCategoryId={setCategoryId}
          handleSave={handleSave}
          setIsAddingTransaction={setIsAddingTransaction}
        />
      ) : (
        <AddButton setIsAddingTransaction={setIsAddingTransaction} />
      )}
    </View>
  );
};

export default AddTransaction;
