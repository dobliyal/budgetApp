import { auth } from './firebaseConfig';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { useIdTokenAuthRequest } from 'expo-auth-session/providers/google';
import { useEffect } from 'react';

export const useGoogleSignIn = () => {
  const redirectUri = 'https://auth.expo.io/@shashanksingh1203/NativeFinalProject';

  const [request, response, promptAsync] = useIdTokenAuthRequest({
    clientId: '571607723129-2ma6f1aqelehk1q4638nk7cagk2tiqkg.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
  });

  useEffect(() => {
    const signInWithGoogle = async () => {
      if (response?.type === 'success') {
        const { id_token } = response.params;
        const credential = GoogleAuthProvider.credential(id_token);
        await signInWithCredential(auth, credential);
      }
    };

    signInWithGoogle();
  }, [response]);

  return { request, response, promptAsync };
};
