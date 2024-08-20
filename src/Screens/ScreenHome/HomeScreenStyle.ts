import { Platform, StyleSheet } from "react-native"

export const styles=StyleSheet.create({
    mainContainer:{
        padding:15,
        paddingVertical: Platform.OS === "ios" ? 170 : 16,
        
    },
    container: {
        marginBottom: 16,
        paddingBottom: 7,
      },
    blur: {
        width: "100%",
        height: 110,
        position: "absolute",
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: "#00000010",
        padding: 16,
      },
      periodTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 15,
      },
      summaryText: {
        fontSize: 18,
        color: "#333",
        marginBottom: 10,
      },
})