import AsyncStorage from '@react-native-async-storage/async-storage';
import { User as FirebaseUser } from 'firebase/auth';

export const storeUserToken = async (user: FirebaseUser) => {
  try {
    const token = await user.getIdToken();
    await AsyncStorage.setItem('userToken', token);
  } catch (error) {
    console.error('Failed to store user token', error);
  }
};

export const getUserToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  } catch (error) {
    console.error('Failed to retrieve user token', error);
    return null;
  }
};

export const clearUserToken = async () => {
  try {
    await AsyncStorage.removeItem('userToken');
  } catch (error) {
    console.error('Failed to clear user token', error);
  }
};
