import SegmentedControl from "@react-native-segmented-control/segmented-control";
import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BarChart, barDataItem } from "react-native-gifted-charts";
import { useSQLiteContext } from "expo-sqlite/next";
import { processWeeklyData } from "../SummaryChart/Utils/ChartQuery";
import { SymbolView } from "expo-symbols";
import Card from "../commonCard/Card";

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
  const [transactionType, setTransactionType] = React.useState<"Income" | "Expense">("Income");

  React.useEffect(() => {
    const fetchData = async () => {
      if (chartPeriod === Period.week) {
        const { startDate, endDate } = getWeekRange(currentDate);
        setCurrentEndDate(new Date(startDate));
        const data = await fetchWeeklyData(startDate, endDate, transactionType);
        console.log("Data before process", data);
        setBarData(processWeeklyData(data, transactionType));
        setChartKey((prev) => prev + 1);
      }
    };
    fetchData();
  }, [chartPeriod, currentDate, transactionType]);

  const getWeekRange = (date: Date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay()); // set to Sunday
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // set to Saturday
    return {
      startDate: startOfWeek.getTime(),
      endDate: endOfWeek.getTime(),
    };
  };

  const handlePreviousWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
  };

  const handleNextWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));
  };

  const fetchWeeklyData = async (startDate: number, endDate: number, type: "Income" | "Expense") => {
    try {
      const startDateInSeconds = Math.floor(startDate / 1000);
      const endDateInSeconds = Math.floor(endDate / 1000);

      const query = `
        SELECT 
          strftime('%w', date / 1000, 'unixepoch') AS day_of_week,
          SUM(amount) as total 
        FROM Transactions 
        WHERE date >= ? AND date <= ? AND type = ? 
        GROUP BY day_of_week
        ORDER BY day_of_week ASC
      `;

      const result = await db.getAllAsync<{
        day_of_week: number;
        total: number;
      }>(query, [startDateInSeconds, endDateInSeconds, type]);

      const formattedResult = result.map((item) => ({
        dayOfWeek: (item.day_of_week + 6) % 7, // Adjusting day_of_week to match the expected days (0 = Sunday, 6 = Saturday)
        total: item.total,
      }));

      console.log(formattedResult);
      return formattedResult;
    } catch (e) {
      console.error("Error fetching weekly data:", e);
      return [];
    }
  };

  return (
    <Card style={{marginBottom: 16}}>
      <Text style={{ fontWeight: "700", fontSize: 18, marginBottom: 8 }}>
        {currentEndDate.toLocaleDateString("en-US", { month: "short" })}{" "}
        {currentEndDate.getDate()} -{" "}
        {currentDate.toLocaleDateString("en-US", { month: "short" })}{" "}
        {currentDate.getDate()+1}
      </Text>
      <Text style={{ color: "gray" }}>
        Total {transactionType === "Expense" ? "Spending" : "Income"}{" "}
      </Text>
      <Text style={{ fontWeight: "700", fontSize: 32, marginBottom: 16 }}>
        ${barData.reduce((total, item) => total + item.value, 0).toFixed(2)}
      </Text>
      <BarChart
        key={chartKey}
        data={barData}
        barWidth={18}
        height={200}
        width={290}
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginTop: 16,
        }}
      >
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
          <Text style={{ fontSize: 11, color: "gray" }}>Prev week</Text>
        </TouchableOpacity>
        <SegmentedControl
          values={["Income", "Expense"]}
          style={{ width: 200 }}
          selectedIndex={transactionType === "Income" ? 0 : 1}
          onChange={(event) => {
            const index = event.nativeEvent.selectedSegmentIndex;
            setTransactionType(index === 0 ? "Income" : "Expense");
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
          <Text style={{ fontSize: 11, color: "gray" }}>Next week</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
}
