import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { setUser, setError } from '../ScreenLogin/redux/authSlice'; 
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RootState } from '../../Utils/Redux/store'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebase'; 

interface FormValues {
  email: string;
  password: string;
}

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const error = useSelector((state: RootState) => state.auth.error);

  const onSubmit = async (data: FormValues) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      dispatch(setUser(userCredential.user));
      navigation.navigate('Home'); // Navigate to Home screen upon successful login
    } catch (error: any) {
      dispatch(setError(error.message));
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

      <Button title="Log In" onPress={handleSubmit(onSubmit)} />

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
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
});

export default LoginScreen;
