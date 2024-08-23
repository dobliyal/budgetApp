import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { stylesCategory } from './addTransactionStyle';

const CategoryButton = ({
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
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setTypeSelected(title);
        setCategoryId(id);
      }}
      activeOpacity={0.6}
      style={[
        stylesCategory.button,
        { backgroundColor: isSelected ? '#007BFF20' : '#00000020' },
      ]}
    >
      <Text
        style={[
          stylesCategory.text,
          { color: isSelected ? '#007BFF' : '#000000' },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;
