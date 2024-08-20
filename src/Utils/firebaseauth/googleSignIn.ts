import { auth } from './firebaseConfig';
import { GoogleAuthProvider, signInWithCredential, UserCredential } from 'firebase/auth';
import { useIdTokenAuthRequest } from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';


const provider = new GoogleAuthProvider();

export const useGoogleSignIn = () => {
  const [request, response, promptAsync] = useIdTokenAuthRequest({
    clientId: '571607723129-52sc5juutqj8uj86vlc2ji55206m98vn.apps.googleusercontent.com', 
    scopes: ['profile', 'email'],
  });

  const signInWithGoogle = async () => {
    try {
      console.log('Response:', response); // Log the response object
      if (response?.type === 'success') {
        const { id_token } = response.params;
        console.log('ID Token:', id_token); // Log the ID token
        const credential = GoogleAuthProvider.credential(id_token);
        return await signInWithCredential(auth, credential);
      }
      throw new Error('Google Sign-In failed');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('An unknown error occurred during Google Sign-In');
    }
  };

  return { signInWithGoogle, request, response, promptAsync };
};
