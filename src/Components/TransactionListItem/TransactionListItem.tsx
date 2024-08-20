import React from 'react'
import { View,Text} from 'react-native'
import { TransactionListItemProps } from '../../Utils/Types/types'
import { Category,Transaction } from '../../Utils/Types/types'
import Card from '../commonCard/Card'
import { AntDesign } from "@expo/vector-icons";
import { AutoSizeText, ResizeTextMode } from "react-native-auto-size-text";
import { categoryColors,categoryEmojies } from '../../Utils/Constants/constants'
import { styles } from './styleTransactionListItem'


const TransactionListItem = ({transaction,categoryInfo}:TransactionListItemProps) => {
  const iconName =
  transaction.type === "Expense" ? "minuscircle" : "pluscircle";
const color = transaction.type === "Expense" ? "red" : "green";
const categoryColor = categoryColors[categoryInfo?.name ?? "Default"];
const emoji = categoryEmojies[categoryInfo?.name ?? "Default"];
  
  return (
    <Card>
      <View style={styles.row}>
      <View style={{gap:3, width:"40%"}}>
      <Amount amount={transaction.amount} color={color} iconName={iconName}/>
    <CategoryItem categoryColor={categoryColor} categoryInfo={categoryInfo} emoji={emoji} />
    </View>
    <TransactionInfo id={transaction.id} date={transaction.date} description={transaction.description}/>
    </View>
    </Card>
  )
}



function TransactionInfo({
  id,
  date,
  description,
}:{
  id:number;
  date:number;
  description: string;
}) {
  const correctDate = new Date(date * 1000);
  return (
    <View style={{ flexGrow: 1, gap: 6, flexShrink: 1 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>{description}</Text>
      <Text>Transaction number {id}</Text>
      <Text style={{ fontSize: 12, color: "gray" }}>
        {correctDate.toDateString()}
      </Text>
    </View>
  );
}


function CategoryItem({
  categoryColor,
  categoryInfo,
  emoji,
}: {
  categoryColor: string;
  categoryInfo: Category | undefined;
  emoji: string;
}) {
  return (
    <View
      style={[
        styles.categoryContainer,
        { backgroundColor: categoryColor + "40" },
      ]}
    >
      <Text style={styles.categoryText}>
        {emoji} {categoryInfo?.name}
      </Text>
    </View>
  );
}

function Amount({
  iconName,
  color,
  amount,
}: {
  iconName: "minuscircle" | "pluscircle";
  color: string;
  amount: number;
}) {
  return (
    <View style={styles.row}>
      <AntDesign name={iconName} size={18} color={color} />
      <AutoSizeText
        fontSize={32}
        mode={ResizeTextMode.max_lines}
        numberOfLines={1}
        style={[styles.amount, { maxWidth: "80%" }]}
      >
        ${amount}
      </AutoSizeText>
    </View>
  );
}


export default TransactionListItem
