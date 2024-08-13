// Firebase/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAgmdsaA5elH42pPJeHYe8dvAjgC3cbujI",
  authDomain: "budgetbuddy-e651f.firebaseapp.com",
  projectId: "budgetbuddy-e651f",
  storageBucket: "budgetbuddy-e651f.appspot.com",
  messagingSenderId: "218217053449",
  appId: "1:218217053449:web:c31a97a3c75a88acafe7d8",
  measurementId: "G-9SZK8F2XPZ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore: Firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, firestore, googleProvider };
