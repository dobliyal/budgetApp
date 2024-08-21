import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from '../../../../Responsive/responsive'; 

export const styles = StyleSheet.create({
  container: {
    gap: heightPercentageToDP('2%'), 
    paddingBottom: heightPercentageToDP('3%'), 
  },
});
