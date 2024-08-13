import { StyleSheet} from "react-native";

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
  });