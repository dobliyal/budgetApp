export const processWeeklyData = (
  data: { dayOfWeek: number; total: number }[],
  transactionsType: "Income" | "Expense" = "Income"
) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const isIncome = transactionsType === "Income";

  let barData = days.map(
    (label) =>
      ({
        label,
        value: 0,
        frontColor: "#d1d5db", 
        gradientColor: "#d1d5db", 
      } as any)
  );

  data.forEach((item) => {
    const dayIndex = item.dayOfWeek;
    if (dayIndex >= 0 && dayIndex < 7) {
      barData[dayIndex].value = item.total;
      if (item.total < 100) {
        barData[dayIndex].frontColor = "#d1d5db"; 
        barData[dayIndex].gradientColor = "#d1d5db"; 
      } else {
        barData[dayIndex].frontColor = isIncome ? "#d3ff00" : "#ffab00"; 
        barData[dayIndex].gradientColor = isIncome ? "#12ff00" : "#ff0000"; 
      }
    } else {
      console.error(`Invalid day of week index: ${item.dayOfWeek}`);
    }
  });

  return barData;
};