import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SQLiteProvider } from 'expo-sqlite/next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, Text, View } from 'react-native';
import LoginScreen from '../Screens/ScreenLogin/LoginScreen';
import SignupScreen from '../Screens/ScreenSignup/SignupScreen';
import HomeScreen from '../Screens/ScreenHome/HomeScreen';  // Import the HomeScreen component
import { Provider } from 'react-redux';
import { store } from '../Utils/Redux/store';  // Ensure you import your store here

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <React.Suspense
          fallback={
            <View>
              <ActivityIndicator size={"large"} />
              <Text>Loading Database...</Text>
            </View>
          }
        >
          <SQLiteProvider databaseName="mySQLite.db" useSuspense>
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  headerTitle: "Budget Tracker",
                  headerLargeTitle: true,
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignupScreen}
                options={{
                  headerTitle: "Budget Tracker",
                  headerLargeTitle: true,
                }}
              />
              <Stack.Screen
                name="Home"
                component={HomeScreen}  
                options={{
                  headerTitle: "Home",
                  headerLargeTitle: true,
                }}
              />
            </Stack.Navigator>
          </SQLiteProvider>
        </React.Suspense>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
