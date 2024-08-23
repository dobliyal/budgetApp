import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../../../Responsive/responsive'; 

export const styles = StyleSheet.create({
  amount: {
    fontSize: widthPercentageToDP('8%'), 
    fontWeight: '800',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthPercentageToDP('2%'), 
  },
  categoryContainer: {
    borderRadius: widthPercentageToDP('3%'), 
    paddingHorizontal: widthPercentageToDP('2%'), 
    paddingVertical: heightPercentageToDP('0.1%'), 
    alignSelf: 'flex-start',
  },
  categoryText: {
    fontSize: widthPercentageToDP('4%'), 
  },
  categoryAmountContainer: {
    gap: heightPercentageToDP('1%'), 
    width: widthPercentageToDP('40%'), 
  },
  transactionInfoContainer: {
    flexGrow: 1,
    gap: heightPercentageToDP('0.5%'), 
    flexShrink: 1,
  },
  descriptionText: {
    fontSize: widthPercentageToDP('5%'), 
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: widthPercentageToDP('3.5%'), 
    color: 'gray',
  },
});
