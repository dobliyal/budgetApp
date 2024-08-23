import { Platform, StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../Responsive/responsive'; 

export const styles = StyleSheet.create({
  mainContainer: {
    padding: widthPercentageToDP('4%'), 
    paddingVertical: Platform.OS === 'ios' ? heightPercentageToDP('19%') : heightPercentageToDP('1%'), 
  },
  container: {
    marginBottom: heightPercentageToDP('2%'),
    paddingBottom: heightPercentageToDP('1%'), 
  },
  blur: {
    width: '100%',
    height: heightPercentageToDP('15%'),
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#00000010',
    padding: widthPercentageToDP('4%'), 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // or 'space-around' for equal spacing
    alignItems: 'center',
    marginVertical: 5, // Adjust the margin as needed
  },
  button: {
    height: 40,
    flex: 10, // Each button will take up equal space
    backgroundColor: '#007BFF20',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5, // Space between the buttons
    borderRadius: 15,
    marginBottom: 6,
    alignItems: 'center',
  },
  buttonlogout:{
    height: 40,
    flex: 0.8, // Each button will take up equal space
    paddingVertical: 8,
    backgroundColor: '#a9def9',
    paddingHorizontal: 15,
    marginHorizontal: 5, // Space between the buttons
    borderRadius: 15,
    marginBottom: 6,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '700',
    color: '#007BFF',
    marginLeft: 5,
    fontSize: 16,
  },
  periodTitle: {
    fontSize: widthPercentageToDP('6%'), 
    fontWeight: 'bold',
    color: '#333',
    marginBottom: heightPercentageToDP('2%'),
  },
  summaryText: {
    fontSize: widthPercentageToDP('4%'), 
    color: '#333',
    marginBottom: heightPercentageToDP('1%'),
  },
});
