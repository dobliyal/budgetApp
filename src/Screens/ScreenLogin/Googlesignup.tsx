import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { ios, web } from "./files";
import { SignIn } from "./comps/signin";
GoogleSignin.configure({
  webClientId: "571607723129-vi3cduk7i5sbpq2p3v9gejiqe3ofh66t.apps.googleusercontent.com",
  scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
  offlineAccess: true,
  forceCodeForRefreshToken: true,
  iosClientId: ios,
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Login to Omash app</Text>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={SignIn}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});