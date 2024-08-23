import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { login } from '../../Utils/firebaseauth/authService';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './stylesLogin';
import LottieView from 'lottie-react-native';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const animationRef=useRef<LottieView>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [buttonAnimation] = useState(new Animated.Value(1));
  const [userInfo, setUserInfo] = useState<any>(null);
  const [loading,setLoading]=useState<any>(false);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '571607723129-7q3v8hbl2foe5qoajai8ddj88cptjnr8.apps.googleusercontent.com',
    iosClientId: '571607723129-49db34cls8qo89rhcvmttvodeht5pikb.apps.googleusercontent.com',

  });

  useEffect(() => {
    handleEffect();
  }, [response]);

  async function handleEffect() {
    const user = await getLocalUser();
    if (!user) {
      if (response?.type === 'success') {
        const { authentication } = response;
        if (authentication?.accessToken) {
          getUserInfo(authentication.accessToken);
          navigation.navigate('Home');
        }
      }
    } else {
      setUserInfo(user);
    }
  }

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem('@user');
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token: string) => {
    if (!token) return;
    try {
      const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = await response.json();
      await AsyncStorage.setItem('@user', JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.log('Error fetching Google user info:', error);
      setErrorMessage('Google Sign-In failed.');
    }
  };

  const handleLogin = async () => {
  setLoading(true);
    try {
      await login(email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      setErrorMessage('Login failed. Please check your credentials.');
    }
    finally{
      setLoading(false);
    }
  };

  const animateButton = () => {
    if (animationRef.current){
      animationRef.current.play();
    }
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
       {loading ? (
        <LottieView
          ref={animationRef}
          autoPlay
          loop
          style={styles.loading}  
          source={require('./assets/loading.json')}
        />
      ) : (
        <Animated.View style={[styles.buttonContainer, { transform: [{ scale: buttonAnimation }] }]}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
     

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Go to Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
