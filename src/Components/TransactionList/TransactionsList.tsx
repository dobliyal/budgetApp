import React, { useRef } from "react";
import { Animated, View, Text } from "react-native";
import { Category, Transaction } from "../../Utils/Types/types";
import TransactionListItem from "../TransactionListItem/TransactionListItem";
import { styles } from "./styleTransactionList";
import GestureRecognizer from 'react-native-swipe-gestures';

const TransactionsList = ({
  transactions,
  categories,
  deleteTransaction,
}: {
  transactions: Transaction[];
  categories: Category[];
  deleteTransaction: (id: number) => Promise<void>;
}) => {
  const animationRefs = useRef<{ [key: number]: Animated.Value }>({});

  transactions.forEach(transaction => {
    if (!animationRefs.current[transaction.id]) {
      animationRefs.current[transaction.id] = new Animated.Value(0);
    }
  });

  const handleSwipeRight = (transactionId: number) => {
    Animated.timing(animationRefs.current[transactionId], {
      toValue: 300, 
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      deleteTransaction(transactionId);
    });
  };

  return (
    <View style={styles.container}>
      {transactions.map((transaction) => {
        const categoryForCurrentItem = categories.find(
          (category) => category.id === transaction.category_id
        );

        return (
          <GestureRecognizer
            key={transaction.id}
            onSwipeRight={() => handleSwipeRight(transaction.id)}
            config={{
              velocityThreshold: 0.3,
              directionalOffsetThreshold: 80,
            }}
          >
            <Animated.View
              style={{
                transform: [
                  {
                    translateX: animationRefs.current[transaction.id],
                  },
                ],
              }}
            >
              <TransactionListItem
                transaction={transaction}
                categoryInfo={categoryForCurrentItem}
              />
            </Animated.View>
          </GestureRecognizer>
        );
      })}
    </View>
  );
};

export default TransactionsList;
