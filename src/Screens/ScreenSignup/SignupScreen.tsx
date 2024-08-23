import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Text, 
  TouchableOpacity, 
  Animated, 
  Easing, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  Image 
} from 'react-native';
import { signup } from '../../Utils/firebaseauth/authService';
import styles from './stylesSignup';

const SignupScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [buttonAnimation] = useState(new Animated.Value(1));

  const handleSignup = async () => {
    try {
      await signup(email, password, name);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      setErrorMessage('Signup failed. Please try again.');
    }
  };

  const animateButton = () => {
    Animated.timing(buttonAnimation, {
      toValue: 0.9,
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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Image
            source={require('../ScreenLogin/assets/login.png')}
            style={styles.topSvg}
          />
          <Text style={styles.title}>Let's Register 🖐</Text>
          {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholderTextColor="#778da9"
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            placeholderTextColor="#778da9"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#778da9"
          />

          <Animated.View style={[styles.buttonContainer, { transform: [{ scale: buttonAnimation }] }]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                animateButton();
                handleSignup();
              }}
            >
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
          </Animated.View>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Go to Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
