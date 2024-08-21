import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import { login } from '../../Utils/firebaseauth/authService';
import { useGoogleSignIn } from '../../Utils/firebaseauth/googleSignIn';
import  styles  from './stylesLogin';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [buttonAnimation] = useState(new Animated.Value(1));

  const { promptAsync } = useGoogleSignIn();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await promptAsync(); 
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      setErrorMessage('Google Sign-In failed.');
    }
  };

  const animateButton = () => {
    Animated.timing(buttonAnimation, {
      toValue: 0.8,
      duration: 100,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(buttonAnimation, {
        toValue: 1,
        duration: 100,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login 🔑</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Animated.View style={[styles.buttonContainer, { transform: [{ scale: buttonAnimation }] }]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            animateButton();
            handleLogin();
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Animated.View>
{/* 
        <TouchableOpacity onPress={handleGoogleSignIn} style={styles.googleButton}>
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity> */}

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Go to Signup</Text>
      </TouchableOpacity>
    </View>
  );
};




export default LoginScreen;
