// GoogleSignInButton.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setError, setLoading } from '../redux/authSlice';
import { View, Button, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../../../Firebase/firebase';
import { storeUserToken } from '../../../Firebase/token';
import { RootState } from '../../../Utils/Redux/store';

GoogleSignin.configure({
  // Your configuration here
});

const GoogleSignInButton: React.FC<{ navigation: any }> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const handleGoogleSignIn = async () => {
    dispatch(setLoading(true));
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const credential = GoogleAuthProvider.credential(idToken);
      const userCredential = await signInWithCredential(auth, credential);

      const user = {
        uid: userCredential.user.uid,
        displayName: userCredential.user.displayName,
        email: userCredential.user.email,
      };

      await storeUserToken(userCredential.user);

      dispatch(setUser(user));
      navigation.navigate('Home'); // Navigate to a different screen after login
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        dispatch(setError('User cancelled the login.'));
      } else if (error.code === statusCodes.IN_PROGRESS) {
        dispatch(setError('Login is in progress.'));
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        dispatch(setError('Play services are not available.'));
      } else {
        dispatch(setError(error.message));
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Button title="Sign In with Google" onPress={handleGoogleSignIn} />
          {error && <Text style={styles.error}>{error}</Text>}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  error: {
    color: 'red',
    marginTop: 16,
    textAlign: 'center',
  },
});

export default GoogleSignInButton;
