import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../Responsive/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: widthPercentageToDP('5%'),
    backgroundColor: '#feffff',
  },
  topSvg: {
    alignSelf: 'flex-start',
    marginLeft: heightPercentageToDP('-3%'),
    marginTop: heightPercentageToDP('-35%'),
    height: heightPercentageToDP('70%'),
    width: widthPercentageToDP('100%'),
  },
  signinTextSvg: {
    alignSelf: 'center',
    marginBottom: heightPercentageToDP('2%'),
  },
  signinLineSvg: {
    alignSelf: 'center',
    marginBottom: heightPercentageToDP('4%'),
  },
  title: {
    fontSize: widthPercentageToDP('7%'),
    fontWeight: 'bold',
    color: '#000814',
    marginBottom: heightPercentageToDP('1%'),
    marginTop: heightPercentageToDP('-8%'),

  },
  input: {
    height: heightPercentageToDP('6%'),
    borderColor: '#e0e1dd',
    borderWidth: 2,
    borderRadius: widthPercentageToDP('3%'),
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
    backgroundColor: '#001d3d',
    paddingVertical: heightPercentageToDP('1.5%'),
    borderRadius: widthPercentageToDP('4%'),
    alignItems: 'center',
    width: '100%',
    marginVertical: heightPercentageToDP('1%'),
  },
  buttonGoogle: {
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
