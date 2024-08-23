import { initializeApp } from 'firebase/app';
// @ts-ignore
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBp4vauzqzI6JoeYEbXkyLediT2KUMeDgM",
  authDomain: "budgetapp-9a3de.firebaseapp.com",
  projectId: "budgetapp-9a3de",
  storageBucket: "budgetapp-9a3de.appspot.com",
  messagingSenderId: "571607723129",
  appId: "1:571607723129:web:402ba733ca6d7f337778a8",
  measurementId: "G-9262GFM73F"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
