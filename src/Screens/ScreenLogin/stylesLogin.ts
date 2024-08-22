import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../Responsive/responsive';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: widthPercentageToDP('5%'),
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: widthPercentageToDP('7%'),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: heightPercentageToDP('4%'),
    textAlign: 'center',
  },
  input: {
    height: heightPercentageToDP('6%'),
    borderColor: '#bde0fe',
    borderWidth: 2,
    borderRadius: widthPercentageToDP('4%'),
    marginVertical: heightPercentageToDP('1.5%'),
    paddingHorizontal: widthPercentageToDP('4%'),
    backgroundColor: '#fff',
    fontSize: widthPercentageToDP('4%'),
    color: '#333',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: heightPercentageToDP('2%'),
    fontSize: widthPercentageToDP('4%'),
  },
  buttonContainer: {
    marginTop: heightPercentageToDP('3%'),
  },
  button: {
    backgroundColor: '#00b4d8',
    paddingVertical: heightPercentageToDP('1.5%'),
    borderRadius: widthPercentageToDP('4%'),
    alignItems: 'center',
    width: '100%',
    marginVertical: heightPercentageToDP('1%'),
  },
  googleButton: {
    backgroundColor: '#db4437',
    paddingVertical: heightPercentageToDP('2.5%'),
    borderRadius: widthPercentageToDP('4%'),
    alignItems: 'center',
    width: '100%',
    marginVertical: heightPercentageToDP('1%'),
  },
  buttonText: {
    color: '#fff',
    fontSize: widthPercentageToDP('5%'),
    fontWeight: 'bold',
  },
  link: {
    color: '#007bff',
    textAlign: 'center',
    marginTop: heightPercentageToDP('3%'),
    fontSize: widthPercentageToDP('4%'),
  },
});


export default styles;
