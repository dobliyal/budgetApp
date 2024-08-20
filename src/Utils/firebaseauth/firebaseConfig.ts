// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp4vauzqzI6JoeYEbXkyLediT2KUMeDgM",
  authDomain: "budgetapp-9a3de.firebaseapp.com",
  projectId: "budgetapp-9a3de",
  storageBucket: "budgetapp-9a3de.appspot.com",
  messagingSenderId: "571607723129",
  appId: "1:571607723129:web:402ba733ca6d7f337778a8",
  measurementId: "G-9262GFM73F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
