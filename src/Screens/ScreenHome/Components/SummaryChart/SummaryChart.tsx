import SegmentedControl from "@react-native-segmented-control/segmented-control";
import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BarChart, barDataItem } from "react-native-gifted-charts";
import { useSQLiteContext } from "expo-sqlite/next";
import { processWeeklyData } from "./Utils/ChartQuery";
import { SymbolView } from "expo-symbols";
import Card from "../../../../Components/commonCard/Card";
import { styles } from './styleSummaryChart'; 

enum Period {
  week = "week",
  month = "month",
  year = "year",
}

export default function SummaryChart() {
  const db = useSQLiteContext();
  const [chartPeriod, setChartPeriod] = React.useState<Period>(Period.week);
  const [barData, setBarData] = React.useState<barDataItem[]>([]);
  const [currentDate, setCurrentDate] = React.useState<Date>(new Date());
  const [currentEndDate, setCurrentEndDate] = React.useState<Date>(new Date());
  const [chartKey, setChartKey] = React.useState(0);
  const [transactionType, setTransactionType] = React.useState<
    "Income" | "Expense"
  >("Income");

  React.useEffect(() => {
    const fetchData = async () => {
      if (chartPeriod === Period.week) {
        const { startDate, endDate } = getWeekRange(currentDate);
        setCurrentEndDate(() => new Date(endDate * 1000));
        const data = await fetchWeeklyData(startDate, endDate, transactionType);
        console.log("Data before process", data);
        setBarData(processWeeklyData(data, transactionType));
        setChartKey((prev) => prev + 1);
      }
    };
    fetchData();
  }, [chartPeriod, currentDate, transactionType]);

  const getWeekRange = (date: Date) => {
    const dayOfWeek = date.getDay();
    const distanceToMonday = (dayOfWeek + 6) % 7; 
    const startOfWeek = new Date(date.setDate(date.getDate() - distanceToMonday));
    const endOfWeek = new Date(startOfWeek.getTime() + 6 * 24 * 60 * 60 * 1000);
    return {
      startDate: Math.floor(startOfWeek.getTime() / 1000),
      endDate: Math.floor(endOfWeek.getTime() / 1000),
    };
  };

  const handlePreviousWeek = () => {
    setCurrentDate(
      () => new Date(currentDate.setDate(currentDate.getDate() - 7))
    );
  };

  const handleNextWeek = () => {
    setCurrentDate(
      () => new Date(currentDate.setDate(currentDate.getDate() + 7))
    );
  };

  const fetchWeeklyData = async (
    startDate: number,
    endDate: number,
    type: "Income" | "Expense"
  ) => {
    try {
      const query = `
      SELECT 
        strftime('%w', date , 'unixepoch') AS day_of_week,
        SUM(amount) as total 
      FROM Transactions 
      WHERE date >= ? AND date <= ? AND type = ? 
      GROUP BY day_of_week
      ORDER BY day_of_week ASC
    `;
 
      const result = await db.getAllAsync<{
        day_of_week: number;
        total: number;
      }>(query, [startDate , endDate , type]);
  
      const formattedResult = result.map((item) => ({
        dayOfWeek: item.day_of_week, 
        total: item.total,
      }));
      console.log(startDate);
      console.log(formattedResult);
      return formattedResult;
    } catch (e) {
      console.error("Error fetching weekly data:", e);
      return [];
    }
  };

  return (
    <Card style={styles.card}>
      <Text style={styles.dateRangeText}>
      {currentDate.getDate()}
        {currentDate.toLocaleDateString("en-US", { month: "short" })}{" "}
        -{" "} {currentEndDate.getDate()} 
        {currentEndDate.toLocaleDateString("en-US", { month: "short" })}{" "}
        
      </Text>
      <Text style={styles.totalText}>
        Total {transactionType === "Expense" ? "Spending" : "Income"}{" "}
      </Text>

      <Text style={styles.amountText}>
        ${barData.reduce((total, item) => total + item.value, 0).toFixed(2)}
      </Text>
      <BarChart
        key={chartKey}
        data={barData}
        barWidth={18}
        height={styles.barChart.height} 
        width={styles.barChart.width} 
        minHeight={3}
        barBorderRadius={3}
        showGradient
        spacing={20}
        noOfSections={4}
        yAxisThickness={0}
        xAxisThickness={0}
        xAxisLabelsVerticalShift={2}
        xAxisLabelTextStyle={{ color: "gray" }}
        yAxisTextStyle={{ color: "gray" }}
        isAnimated
        animationDuration={300}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handlePreviousWeek}
          style={{ alignItems: "center" }}
        >
          <SymbolView
            name="chevron.left.circle.fill"
            size={40}
            type="hierarchical"
            tintColor={"gray"}
          />
          <Text style={styles.buttonText}>Prev week</Text>
        </TouchableOpacity>
        <SegmentedControl
          values={["Income", "Expense"]}
          style={styles.segmentedControl}
          selectedIndex={transactionType === "Income" ? 0 : 1}
          onChange={(event) => {
            const index = event.nativeEvent.selectedSegmentIndex;
            if (index === 0) {
              setTransactionType("Income");
            } else {
              setTransactionType("Expense");
            }
          }}
        />
        <TouchableOpacity
          onPress={handleNextWeek}
          style={{ alignItems: "center" }}
        >
          <SymbolView
            name="chevron.right.circle.fill"
            size={40}
            type="hierarchical"
            tintColor={"gray"}
          />
          <Text style={styles.buttonText}>Next week</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
}
