import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SQLiteProvider } from 'expo-sqlite/next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, Text, View } from 'react-native';
import Home from '../Screens/ScreenHome/HomeScreen';
import Payment from '../Screens/ScreenPayment/Payment';
import Login from '../Screens/ScreenLogin/LoginScreen';
import Signup from '../Screens/ScreenSignup/SignupScreen';
import { auth } from '../Utils/firebaseauth/firebaseConfig'; 
import { onAuthStateChanged } from 'firebase/auth';
import ScreenOnboard from '../Screens/ScreenOnboard/ScreenOnboard';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return (
      <View>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      
      <React.Suspense
        fallback={
          <View>
            <ActivityIndicator size="large" />
            <Text>Loading DataBase...</Text>
          </View>
        }
      >
        <SQLiteProvider databaseName="mySQLiteDB.db" useSuspense>
          {isAuthenticated ? (
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerTitle: "Budget Tracker",
                  headerLargeTitle: true,
                }}
              />
              <Stack.Screen
                name="Payment"
                component={Payment}
                options={{
                  presentation: "transparentModal",
                  headerShown: false,
                  animation: "slide_from_bottom",
                }}
              />
            </Stack.Navigator>
          ) : (
            <AuthStack.Navigator>
              <AuthStack.Screen
                name="Onboard"
                component={ScreenOnboard}
                options={{ headerShown: false }}
              />
              <AuthStack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <AuthStack.Screen
                name="Signup"
                component={Signup}
                options={{ headerShown: false }}
              />
            </AuthStack.Navigator>
          )}
        </SQLiteProvider>
      </React.Suspense>
    </NavigationContainer>
  );
};

export default Navigation;
