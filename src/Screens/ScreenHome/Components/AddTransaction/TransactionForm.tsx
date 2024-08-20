// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
// import Card from '../../../../Components/commonCard/Card';
// import SegmentedControl from '@react-native-segmented-control/segmented-control';
// import CategoryButton from './CategoryButton';
// import { Category } from '../../../../Utils/Types/types';
// import { stylesForm } from './addTransactionStyle';

// const TransactionForm = ({
//   amount,
//   description,
//   categories,
//   currentTab,
//   typeSelected,
//   setAmount,
//   setDescription,
//   setCurrentTab,
//   setIsScannerActive,
//   setTypeSelected,
//   setCategoryId,
//   handleSave,
//   setIsAddingTransaction,
// }: {
//   amount: string;
//   description: string;
//   categories: Category[];
//   currentTab: number;
//   typeSelected: string;
//   setAmount: React.Dispatch<React.SetStateAction<string>>;
//   setDescription: React.Dispatch<React.SetStateAction<string>>;
//   setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
//   setIsScannerActive: React.Dispatch<React.SetStateAction<boolean>>;
//   setTypeSelected: React.Dispatch<React.SetStateAction<string>>;
//   setCategoryId: React.Dispatch<React.SetStateAction<number>>;
//   handleSave: () => void;
//   setIsAddingTransaction: React.Dispatch<React.SetStateAction<boolean>>;
// }) => {
//   return (
//     <View>
//       <Card>
//         <TextInput
//           placeholder="$Amount"
//           style={stylesForm.amountInput}
//           keyboardType="numeric"
//           value={amount}
//           onChangeText={(text) => {
//             const numericValue = text.replace(/[^0-9.]/g, '');
//             setAmount(numericValue);
//           }}
//         />
//         <TextInput
//           placeholder="Description"
//           style={stylesForm.descriptionInput}
//           value={description}
//           onChangeText={setDescription}
//         />
//         <Text style={stylesForm.entryTypeText}>Select an entry type</Text>
//         <SegmentedControl
//           values={['Expense', 'Income']}
//           style={stylesForm.segmentedControl}
//           selectedIndex={currentTab}
//           onChange={(event) => {
//             setCurrentTab(event.nativeEvent.selectedSegmentIndex);
//           }}
//         />
//         {categories.map((cat) => (
//           <CategoryButton
//             key={cat.id}
//             id={cat.id}
//             title={cat.name}
//             isSelected={cat.name === typeSelected}
//             setTypeSelected={setTypeSelected}
//             setCategoryId={setCategoryId}
//           />
//         ))}
//         <TouchableOpacity
//           onPress={() => setIsScannerActive(true)}
//           style={stylesForm.scanButton}
//         >
//           <Text style={stylesForm.scanButtonText}>Scan Barcode</Text>
//         </TouchableOpacity>
//       </Card>
//       <View style={stylesForm.buttonContainer}>
//         <Button
//           title="Cancel"
//           color="red"
//           onPress={() => {
//             setIsAddingTransaction(false);
//             setAmount('');
//           }}
//         />
//         <Button title="Save" onPress={handleSave} />
//       </View>
//     </View>
//   );
// };

// export default TransactionForm;


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import Card from '../../../../Components/commonCard/Card';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import CategoryButton from './CategoryButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Category } from '../../../../Utils/Types/types';
import { stylesForm } from './addTransactionStyle';

const TransactionForm = ({
  amount,
  description,
  categories,
  currentTab,
  typeSelected,
  date,
  setAmount,
  setDescription,
  setCurrentTab,
  setDate,
  setIsScannerActive,
  setTypeSelected,
  setCategoryId,
  handleSave,
  setIsAddingTransaction,
}: {
  amount: string;
  description: string;
  categories: Category[];
  currentTab: number;
  typeSelected: string;
  date: Date;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  setIsScannerActive: React.Dispatch<React.SetStateAction<boolean>>;
  setTypeSelected: React.Dispatch<React.SetStateAction<string>>;
  setCategoryId: React.Dispatch<React.SetStateAction<number>>;
  handleSave: () => void;
  setIsAddingTransaction: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View>
      <Card>
        <TextInput
          placeholder="$Amount"
          style={stylesForm.amountInput}
          keyboardType="numeric"
          value={amount}
          onChangeText={(text) => {
            const numericValue = text.replace(/[^0-9.]/g, '');
            setAmount(numericValue);
          }}
        />
        <TextInput
          placeholder="Description"
          style={stylesForm.descriptionInput}
          value={description}
          onChangeText={setDescription}
        />
        <Text style={stylesForm.entryTypeText}>Select an entry type</Text>
        <SegmentedControl
          values={['Expense', 'Income']}
          style={stylesForm.segmentedControl}
          selectedIndex={currentTab}
          onChange={(event) => {
            setCurrentTab(event.nativeEvent.selectedSegmentIndex);
          }}
        />
        {categories.map((cat) => (
          <CategoryButton
            key={cat.id}
            id={cat.id}
            title={cat.name}
            isSelected={cat.name === typeSelected}
            setTypeSelected={setTypeSelected}
            setCategoryId={setCategoryId}
          />
        ))}
        <TouchableOpacity
          onPress={() => setIsScannerActive(true)}
          style={stylesForm.scanButton}
        >
          <Text style={stylesForm.scanButtonText}>Scan Barcode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
           style={stylesForm.datePickerButton}
        >
          <Text 
           style={stylesForm.datePickerButtonText}
          >
            {date.toDateString()}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </Card>
      <View style={stylesForm.buttonContainer}>
        <Button
          title="Cancel"
          color="red"
          onPress={() => {
            setIsAddingTransaction(false);
            setAmount('');
          }}
        />
        <Button title="Save" onPress={handleSave} />
      </View>
    </View>
  );
};

export default TransactionForm;
