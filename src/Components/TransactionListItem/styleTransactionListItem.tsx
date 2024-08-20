import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  amount: {
    fontSize: 32,
    fontWeight: "800",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  categoryContainer: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    alignSelf: "flex-start",
  },
  categoryText: {
    fontSize: 12,
  },
  categoryAmountContainer: {
    gap: 3,
    width: "40%",
  },
  transactionInfoContainer: {
    flexGrow: 1,
    gap: 6,
    flexShrink: 1,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 12,
    color: "gray",
  },
});
