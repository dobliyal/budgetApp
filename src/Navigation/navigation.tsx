import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SQLiteProvider } from 'expo-sqlite/next'
import Home from '../Screens/ScreenHome/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActivityIndicator, Text, View } from 'react-native';
import Payment from '../Screens/ScreenPayment/Payment'

const  Stack=createNativeStackNavigator();

const Navigation = () => {
  return (
    
      <NavigationContainer>
   <React.Suspense
    fallback={  
    //lotty
    <View>
      <ActivityIndicator size={"large"}/>
  <Text>loading DataBase...</Text>
  </View>
    }
   >
    <SQLiteProvider databaseName="mySQLiteDB.db" useSuspense>
     <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}
     options={{
      headerTitle:"Budget Tracker",
      headerLargeTitle: true,
     }}
      />
       <Stack.Screen name="Payment" component={Payment}
     options={{
        presentation:"transparentModal",
        headerShown: false,
        animation:"slide_from_bottom",
     }}
      />
     </Stack.Navigator>
    </SQLiteProvider>
   </React.Suspense>
    </NavigationContainer>
   
  )
}

export default Navigation
