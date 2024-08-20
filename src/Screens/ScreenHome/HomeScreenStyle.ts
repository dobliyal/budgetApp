import { Platform, StyleSheet } from "react-native"
import { heightPercentageToDP, widthPercentageToDP } from "../../Responsive/responsive"

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
      button: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007BFF20',
        borderRadius: 15,
        marginBottom: 6,
      },
      buttonText: {
        fontWeight: '700',
        color: '#007BFF',
        marginLeft: 5,
        fontSize: 16,
      },

      icon: {
        width: 24,
        height: 24,
      },
      header: {
        position: 'absolute',
        top: 10,
        right: 10,
        alignItems: 'flex-end',
        zIndex: 1, // Ensure it stays on top of other components
      },

})