import { StyleSheet } from 'react-native';
import { widthPercentageToDP,heightPercentageToDP } from '../../Responsive/responsive';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: heightPercentageToDP('40%'),
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    borderRadius: 16,
    marginTop: -heightPercentageToDP('3%'),
  },
  textContainer: {
    alignItems: 'center',
  },
  heading: {
    fontSize: widthPercentageToDP('8.5%'),
    fontWeight: 'bold',
    textAlign: 'center',
    // marginBottom: heightPercentageToDP('1%'),
    marginTop: heightPercentageToDP('16%'),
    color: '#000',
  },
  paragraph: {
    fontSize: widthPercentageToDP('4%'),
    lineHeight: heightPercentageToDP('4%'),
    textAlign: 'center',
    marginTop: heightPercentageToDP('2%'),
    marginBottom: heightPercentageToDP('3%'),
  },
  orangeText: {
    color: '#fb5607',
  },
  buttonContainer: {
    width: '90%',
    backgroundColor: '#0d1b2a',
    borderRadius: 15,
    padding: widthPercentageToDP('4%'),
    alignItems: 'center',
    marginBottom: heightPercentageToDP('4%'),
  },
  buttonText: {
    color: '#fff',
    fontSize: widthPercentageToDP('4%'),
    fontWeight: 'bold',
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    marginBottom: heightPercentageToDP('3%'),
  },
  dot: {
    width: widthPercentageToDP('2%'),
    height: widthPercentageToDP('2%'),
    borderRadius: widthPercentageToDP('1%'),
    margin: widthPercentageToDP('1%'),
  },
  activeDot: {
    backgroundColor: '#0D6EFD',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
});

export default styles;





