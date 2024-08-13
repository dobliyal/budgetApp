import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SQLiteProvider } from 'expo-sqlite/next'
import Home from '../Screens/ScreenHome/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActivityIndicator, Text, View } from 'react-native';


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
     </Stack.Navigator>
    </SQLiteProvider>
   </React.Suspense>
    </NavigationContainer>
   
  )
}

export default Navigation
