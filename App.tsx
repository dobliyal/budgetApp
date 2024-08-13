import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Text, View } from 'react-native';
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import React from 'react';
import Navigation from './src/Navigation/navigation';



const loadDatabase = async () => {
  const dbName = "mySQLiteDB.db";
  const dbAsset = require("./assets/mySQLiteDB.db");
  const dbUri = Asset.fromModule(dbAsset).uri;
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;

  const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
  if (!fileInfo.exists) {
    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}SQLite`,
      { intermediates: true }
    );
    await FileSystem.downloadAsync(dbUri, dbFilePath);
  }
};




export default function App() {
   const[dbloaded,setDbLoaded]=React.useState<boolean>(false);
   React.useEffect(()=>{
    loadDatabase()
    .then(()=>setDbLoaded(true))
    .catch((e)=>console.error(e));
   },[]);

   if(!dbloaded)
    return(
      <View style={{flex:1}}>
        <ActivityIndicator size={"large"}/>
    <Text>loading DataBase...</Text>
    </View>
    );


  return (
    <Navigation/>

  );
};



