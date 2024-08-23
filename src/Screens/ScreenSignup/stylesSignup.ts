import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../Responsive/responsive'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: widthPercentageToDP('5%'),
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: widthPercentageToDP('6%'),
    fontWeight: 'bold',
    marginBottom: heightPercentageToDP('3%'),
    textAlign: 'center',
    marginTop: heightPercentageToDP('2%'),
  },
  input: {
    height: heightPercentageToDP('5%'),
    borderColor: '#bde0fe',
    borderWidth: 2,
    borderRadius: widthPercentageToDP('3%'),
    marginVertical: heightPercentageToDP('1%'),
    paddingHorizontal: widthPercentageToDP('4%'),
    backgroundColor: '#fff',
    fontSize: widthPercentageToDP('4%'),
    color: '#333',
  },
  inputFocused: {
    borderColor: '#007bff',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: heightPercentageToDP('2%'),
  },
  buttonContainer: {
    marginTop: heightPercentageToDP('3%'),
  },
  topSvg: {
    alignSelf: 'center',
    marginBottom: heightPercentageToDP('0%'),
    marginRight: heightPercentageToDP('18%'),
    marginTop: heightPercentageToDP('-7%'),
  },
  button: {
    backgroundColor: '#00b4d8',
    paddingVertical: heightPercentageToDP('1.5%'),
    borderRadius: widthPercentageToDP('3%'),
    alignItems: 'center',
    width: '100%',
    marginVertical: heightPercentageToDP('1%'),
  },
  buttonText: {
    color: '#fff',
    fontSize: widthPercentageToDP('4.5%'),
    fontWeight: 'bold',
  },
  link: {
    color: '#007bff',
    textAlign: 'center',
    marginTop: heightPercentageToDP('2%'),
    fontSize: widthPercentageToDP('4%'),
  },
});

export default styles;
