import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../../../Responsive/responsive'; 

export const stylesButton = StyleSheet.create({
  button: {
    height: heightPercentageToDP('6%'), 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007BFF20',
    borderRadius: widthPercentageToDP('4%'), 
  },
  button1: {
    height: heightPercentageToDP('6%'), 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007BFF20',
    borderRadius: widthPercentageToDP('4%'), 
    bottom:4
  },
  text: {
    fontWeight: '700',
    color: '#007BFF',
    marginLeft: widthPercentageToDP('2%'), 
  },
});

export const stylesCategory = StyleSheet.create({
  button: {
    height: heightPercentageToDP('5%'), 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: widthPercentageToDP('4%'), 
    marginBottom: heightPercentageToDP('1%'), 
  },
  text: {
    fontWeight: '700',
    marginLeft: widthPercentageToDP('2%'), 
  },
});

export const stylesAddTransaction = StyleSheet.create({
  container: {
    marginBottom: heightPercentageToDP('2%'), 
  }
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
  },
  cancelButton: {
    padding: widthPercentageToDP('30%'), 
  },
  cancelText: {
    color: 'white',
    top: heightPercentageToDP('12%'), 
    left: widthPercentageToDP('10%'), 
  },
});

export const stylesForm = StyleSheet.create({
  amountInput: {
    fontSize: widthPercentageToDP('7%'), 
    marginBottom: heightPercentageToDP('1%'), 
    fontWeight: 'bold',
  },
  datePickerButton: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
  },
  datePickerButtonText: {
    color: '#333',
  },
  descriptionInput: {
    marginBottom: heightPercentageToDP('2%'), 
  },
  entryTypeText: {
    marginBottom: heightPercentageToDP('1%'), 
  },
  segmentedControl: {
    marginBottom: heightPercentageToDP('2%'), 
  },
  scanButton: {
    marginVertical: heightPercentageToDP('1%'), 
    padding: widthPercentageToDP('4%'), 
    backgroundColor: '#007BFF',
    borderRadius: widthPercentageToDP('2%'), 
  },
  scanButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
