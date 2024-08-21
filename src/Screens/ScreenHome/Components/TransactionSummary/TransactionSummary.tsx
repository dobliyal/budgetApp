import React from 'react'
import { TransactionsByMonth } from '../../../../Utils/Types/types';
import Card from '../../../../Components/commonCard/Card';
import { Text, TextStyle } from 'react-native';
import { styles } from '../../homeScreenStyle';

function Transactionsummary({
    totalIncome,
    totalExpenses,
  }:TransactionsByMonth){
     const savings=totalIncome-totalExpenses;
    const readablePeriod= new Date().toLocaleDateString("default",{
      month:"long",
      year: "numeric",
    });
  
    const getMoneyTextStyle =(value:number):TextStyle=>({
      fontWeight:"bold",
      color: value < 0 ? "#ff4500" : "#2e8b57",
    });
  
    const formatMoney = (value: number) => {
      const absValue = Math.abs(value).toFixed(2);
      return `${value < 0 ? "-" : ""}$${absValue}`;
    };
  
    return (
      <Card style={styles.container}>
      <Text style={styles.periodTitle}>Summary for {readablePeriod}</Text> 
       <Text style={styles.summaryText}>
        Income:{" "}
        <Text style={getMoneyTextStyle(totalIncome)}>
          {formatMoney(totalIncome)}
        </Text>
      </Text>
      <Text style={styles.summaryText}>
        Total Expenses:{" "}
        <Text style={getMoneyTextStyle(totalExpenses)}>
          {formatMoney(totalExpenses)}
        </Text>
      </Text>
      <Text style={styles.summaryText}>
        Savings:{" "}
        <Text style={getMoneyTextStyle(savings)}>{formatMoney(savings)}</Text>
      </Text>
    </Card>
    )
  }
  

export default Transactionsummary
