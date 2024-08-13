import React from 'react'
import { View,Text} from 'react-native'
import { TransactionListItemProps } from '../../Utils/Types/types'
import { Category,Transaction } from '../../Utils/Types/types'
import Card from '../commonCard/Card'

const TransactionListItem = ({transaction,categoryInfo}:TransactionListItemProps) => {
  return (
    <Card>
    <Text>
      {categoryInfo?.name} amount: {transaction.amount}
    </Text>
    </Card>
  )
}

export default TransactionListItem
