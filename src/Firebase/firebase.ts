import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, Firestore } from 'firebase/firestore';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAgmdsaA5elH42pPJeHYe8dvAjgC3cbujI",
  authDomain: "budgetbuddy-e651f.firebaseapp.com",
  projectId: "budgetbuddy-e651f",
  storageBucket: "budgetbuddy-e651f.appspot.com",
  messagingSenderId: "218217053449",
  appId: "1:218217053449:web:c31a97a3c75a88acafe7d8",
  measurementId: "G-9SZK8F2XPZ"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Firestore
const firestore: Firestore = getFirestore(app);

// Export Auth and Firestore
export { auth, firestore };
