import { useSQLiteContext } from 'expo-sqlite/next'
import * as React from 'react'
import { View,Text } from 'react-native'
import { Category,Transaction } from '../../Utils/Types/types'


const HomeScreen = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  // console.log('yo');
  const db = useSQLiteContext();

  React.useEffect(() => {
    db.withTransactionAsync(async () => {
      await getData();
    });
  }, [db]);

  async function getData(){
    const result=await db.getAllAsync('SELECT * FROM Transactions');
    console.log(result);
  }

  return (
    <View>
     
      <Text>Home screen hai ya ek theek hai  </Text>
    </View>
  )
}

export default HomeScreen


