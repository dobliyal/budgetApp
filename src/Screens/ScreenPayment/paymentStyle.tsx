import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../Responsive/responsive'; 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressableArea: {
    flex: 1,
  },
  blurView: {
    height: heightPercentageToDP('50%'), 
    width: '100%',
    position: 'absolute',
    bottom: 0,
    elevation: 8,
    shadowColor: '#000',
    shadowRadius: widthPercentageToDP('2%'), 
    shadowOpacity: 0.15,
    padding: widthPercentageToDP('4%'), 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cancelButtonText: {
    color: '#007AFF',
    fontSize: widthPercentageToDP('4.5%'), 
  },
  content: {
    gap: heightPercentageToDP('1.25%'), 
    paddingTop: heightPercentageToDP('2%'), 
  },
  titleText: {
    textAlign: 'center',
    fontSize: widthPercentageToDP('7%'), 
    fontWeight: 'bold',
    color: 'gray',
  },
  savingsText: {
    textAlign: 'center',
    fontSize: widthPercentageToDP('8%'), 
    fontWeight: '900',
    marginTop: heightPercentageToDP('2%'), 
  },
  infoText: {
    textAlign: 'center',
    fontSize: widthPercentageToDP('4.5%'), 
  },
  premiumButton: {
    backgroundColor: 'black',
    padding: widthPercentageToDP('3%'), 
    borderRadius: widthPercentageToDP('2.5%'), 
    marginTop: heightPercentageToDP('2%'), 
  },
  premiumButtonText: {
    fontWeight: '700',
    fontSize: widthPercentageToDP('4.5%'),
    color: 'white',
    textAlign: 'center',
  },
  maybeLaterText: {
    color: 'gray',
    fontSize: widthPercentageToDP('4.5%'), 
    textAlign: 'center',
  },
});
