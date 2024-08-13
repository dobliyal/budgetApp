import { useSQLiteContext } from 'expo-sqlite/next'
import * as React from 'react'
import { View,Text, ScrollView } from 'react-native'
import { Category,Transaction } from '../../Utils/Types/types'
import { styles } from './HomeScreenStyle'
import TransactionsList from '../../Components/TransactionsList'

const HomeScreen = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);


  const db = useSQLiteContext();

  React.useEffect(() => {
    db.withTransactionAsync(async () => {
      await getData();
    });
  }, [db]);

  async function getData(){
    const result=await db.getAllAsync<Transaction>('SELECT * FROM Transactions ORDER BY date DESC;');
    setTransactions(result);

    const categoriesResult= await db.getAllAsync<Category>(
    'SELECT * FROM Categories;'
    );
    setCategories(categoriesResult);
  }
  
  async function deleteTransaction(id:number){
    db.withTransactionAsync(async () =>{
      await db.runAsync('DELETE FROM Transactions WHERE id= ?;',[id])
      await getData();
    })
  }

  return (
    <ScrollView style={styles.container}>
     <TransactionsList
     transactions={transactions}
     categories={categories}
     deleteTransaction={deleteTransaction}
     />
    </ScrollView>
  )
}

export default HomeScreen




