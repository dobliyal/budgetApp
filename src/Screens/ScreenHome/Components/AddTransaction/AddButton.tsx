import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { stylesButton } from './addTransactionStyle';

const AddButton = ({
  setIsAddingTransaction,
}: {
  setIsAddingTransaction: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setIsAddingTransaction(true)}
      activeOpacity={0.6}
      style={stylesButton.button}
    >
      <MaterialIcons name="add-circle-outline" size={24} color="#007BFF" />
      <Text style={stylesButton.text}>New Entry</Text>
    </TouchableOpacity>
  );
};

export default AddButton;
