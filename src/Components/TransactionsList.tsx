import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Category, Transaction } from "../Utils/Types/types";
import TransactionListItem from "./TransactionListItem/TransactionListItem";

const TransactionsList = ({
  transactions,
  categories,
  deleteTransaction,
}: {
  transactions: Transaction[];
  categories: Category[];
  deleteTransaction: (id: number) => Promise<void>;
}) => {
  return (
    <View>
      {transactions.map((transaction) => {
        const categoryForCurrentItem = categories.find(
          (category) => category.id === transaction.category_id
        );
        return (
          <TouchableOpacity
            key={transaction.id}
            activeOpacity={0.7}
            onLongPress={() => deleteTransaction(transaction.id)}
          >
            <TransactionListItem
              transaction={transaction}
              categoryInfo={categoryForCurrentItem}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TransactionsList;
