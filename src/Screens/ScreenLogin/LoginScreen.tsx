import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { setUser, setError, setLoading } from '../ScreenLogin/redux/authSlice';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RootState } from '../../Utils/Redux/store';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebase';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { storeUserToken } from '../../Firebase/token';

// Google Sign-In configuration should be handled in a setup file or component
GoogleSignin.configure({
  webClientId: 'AIzaSyAgmdsaA5elH42pPJeHYe8dvAjgC3cbujI.apps.googleusercontent.com', // Replace with your web client ID
});

interface FormValues {
  email: string;
  password: string;
}

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const { error, loading } = useSelector((state: RootState) => ({
    error: state.auth.error,
    loading: state.auth.loading,
  }));

  const onSubmit = async (data: FormValues) => {
    dispatch(setLoading(true));
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      dispatch(setUser(userCredential.user));
      navigation.navigate('Home'); 
    } catch (error: any) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

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
      navigation.navigate('Home');
    } catch (error: any) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <Controller
        control={control}
        name="email"
        rules={{ required: 'Email is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Email"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={styles.input}
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="password"
        rules={{ required: 'Password is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            secureTextEntry
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={styles.input}
          />
        )}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      {error && <Text style={styles.error}>{error}</Text>}

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Button title="Log In" onPress={handleSubmit(onSubmit)} />
          <TouchableOpacity onPress={handleGoogleSignIn} style={styles.googleButton}>
            <Text style={styles.googleButtonText}>Sign In with Google</Text>
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
  link: {
    color: 'blue',
    marginTop: 16,
    textAlign: 'center',
  },
  googleButton: {
    marginTop: 16,
    padding: 10,
    backgroundColor: '#4285F4', // Google blue color
    borderRadius: 5,
  },
  googleButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default LoginScreen;
