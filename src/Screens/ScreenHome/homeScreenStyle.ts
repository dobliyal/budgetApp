import { Platform, StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../Responsive/responsive'; 

export const styles = StyleSheet.create({
  mainContainer: {
    padding: widthPercentageToDP('4%'), 
    paddingVertical: Platform.OS === 'ios' ? heightPercentageToDP('16%') : heightPercentageToDP('1%'), 
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
