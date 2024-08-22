import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Animated, Easing, Button } from 'react-native';
import { login } from '../../Utils/firebaseauth/authService';
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import  styles  from './stylesLogin';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [buttonAnimation] = useState(new Animated.Value(1));
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);



  const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "571607723129-5etqd6mckns2i5588kjc5s49pqs6vlj3.apps.googleusercontent.com",
    iosClientId: "571607723129-49db34cls8qo89rhcvmttvodeht5pikb.apps.googleusercontent.com",
  });
  
  useEffect(() => {
    handleEffect();
  }, [response, token]);
  
  async function handleEffect() {
    const user = await getLocalUser();
    console.log("user", user);
    
    if (!user) {
      if (response?.type === "success" && response.authentication?.accessToken) {
        getUserInfo(response.authentication.accessToken);
      } else {
        console.log("Authentication response or token is null");
      }
    } else {
      setUserInfo(user);
      console.log("loaded locally");
    }
  }
  

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token: string) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      // Add 
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

      <Button
          title="Sign in with Google"
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        />



      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Go to Signup</Text>
      </TouchableOpacity>


    </View>

    
  );
};




export default LoginScreen;
