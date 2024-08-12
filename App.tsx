import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/Screens/ScreenLogin/LoginScreen';
import SignupScreen from './src/Screens/ScreenSignup/SignupScreen';
import HomeScreen from './src/Screens/ScreenHome/HomeScreen';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/Utils/Redux/store';
import { setUser } from './src/Screens/ScreenLogin/redux/authSlice';
import { getUser } from './src/Firebase/firebase';
import { RootState } from './src/Utils/Redux/store';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const checkUserSession = async () => {
      const user = await getUser();
      if (user) {
        dispatch(setUser(user));
      }
      setIsLoading(false); // Set loading to false once the check is complete
    };
    checkUserSession();
  }, [dispatch]);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Home" : "Login"}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Root: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
