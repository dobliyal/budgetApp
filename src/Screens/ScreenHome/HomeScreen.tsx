import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Home Screen</Text>
      <Button title="Log Out" onPress={() => {
        // Handle logout logic
        navigation.navigate('Login');
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});

export default HomeScreen;
