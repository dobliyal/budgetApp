import { useSQLiteContext } from 'expo-sqlite/next';
import * as React from 'react';
import { View, Text, ScrollView, TextStyle, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { Category, Transaction } from '../../Utils/Types/types';
import { styles } from './homeScreenStyle';
import TransactionsList from './Components/TransactionList/TransactionsList';
import { TransactionsByMonth } from '../../Utils/Types/types';
import AddTransaction from './Components/AddTransaction/AddTransaction';import SummaryChart from './Components/SummaryChart/SummaryChart';
import Transactionsummary from './Components/TransactionSummary/TransactionSummary';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { logout } from '../../Utils/firebaseauth/authService';
import LogoutIcon from '../../../assets/Logologout';




type StackParamsList = {
  Payment: { savings: number };
};

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const [transactionsByMonth, setTransactionsByMonth] =
    React.useState<TransactionsByMonth>({
      totalExpenses: 0,
      totalIncome: 0,
    });

  const db = useSQLiteContext();

  React.useEffect(() => {
    db.withTransactionAsync(async () => {
      await getData();
    });
  }, [db]);

  async function getData() {
    const result = await db.getAllAsync<Transaction>(
      `SELECT * FROM Transactions ORDER BY date DESC LIMIT 10;`
    );
    setTransactions(result);

    const categoriesResult = await db.getAllAsync<Category>(
      'SELECT * FROM Categories;'
    );
    setCategories(categoriesResult);

    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    endOfMonth.setMilliseconds(endOfMonth.getMilliseconds() - 1);

    const startOfMonthTimestamp = Math.floor(startOfMonth.getTime() / 1000);
    const endOfMonthTimestamp = Math.floor(endOfMonth.getTime() / 1000);

    const transactionsByMonth = await db.getAllAsync<TransactionsByMonth>(
      `
      SELECT
        COALESCE(SUM(CASE WHEN type = 'Expense' THEN amount ELSE 0 END), 0) AS totalExpenses,
        COALESCE(SUM(CASE WHEN type = 'Income' THEN amount ELSE 0 END), 0) AS totalIncome
      FROM Transactions
      WHERE date >= ? AND date <= ?;
    `,
      [startOfMonthTimestamp, endOfMonthTimestamp]
    );
    setTransactionsByMonth(transactionsByMonth[0]);
  }

  async function deleteTransaction(id: number) {
    db.withTransactionAsync(async () => {
      await db.runAsync('DELETE FROM Transactions WHERE id= ?;', [id]);
      await getData();
    });
  }

  async function insertTransaction(transaction: Transaction) {
    db.withTransactionAsync(async () => {
      await db.runAsync(
        `
        INSERT INTO Transactions (category_id, amount, date, description, type) VALUES (?, ?, ?, ?, ?);
      `,
        [
          transaction.category_id,
          transaction.amount,
          transaction.date,
          transaction.description,
          transaction.type,
        ]
      );
      await getData();
    });
  }
  

  return (
    
    <ScrollView style={styles.mainContainer}>

    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Payment', {
            savings: transactionsByMonth.totalIncome - transactionsByMonth.totalExpenses,
          })
        }
      >
        <Text style={styles.buttonText}>Savings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonlogout} onPress={logout}>
        <LogoutIcon />
      </TouchableOpacity>
    </View>



      <AddTransaction insertTransaction={insertTransaction} />
      <SummaryChart />
      <Transactionsummary
        totalIncome={transactionsByMonth.totalIncome}
        totalExpenses={transactionsByMonth.totalExpenses}
      />
      <TransactionsList
        transactions={transactions}
        categories={categories}
        deleteTransaction={deleteTransaction}
      />
    </ScrollView>
  );
};


export default HomeScreen;
