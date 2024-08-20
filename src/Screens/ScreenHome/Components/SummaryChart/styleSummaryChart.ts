import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../../../Responsive/responsive'; 

export const styles = StyleSheet.create({
  card: {
    marginBottom: heightPercentageToDP('2%'), 
  },
  dateRangeText: {
    fontWeight: '700',
    fontSize: widthPercentageToDP('6%'), 
  },
  totalText: {
    color: 'gray',
  },
  amountText: {
    fontWeight: '700',
    fontSize: widthPercentageToDP('8%'), 
  },
  barChart: {
    height: heightPercentageToDP('30%'), 
    width: widthPercentageToDP('80%'), 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: heightPercentageToDP('1.5%'), 
  },
  buttonText: {
    fontSize: widthPercentageToDP('4%'), 
    color: 'gray',
  },
  segmentedControl: {
    width: widthPercentageToDP('40%'), 
  },
});
