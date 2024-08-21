import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 30,
      textAlign: 'center',
    },
    input: {
      height: 50,
      borderColor: '#bde0fe',
      borderWidth: 2,
      borderRadius: 15,
      marginVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#333',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      marginBottom: 15,
      fontSize: 14,
    },
    buttonContainer: {
      marginTop: 20,
    },
    button: {
      backgroundColor: '#00b4d8',
      paddingVertical: 15,
      borderRadius: 15,
      alignItems: 'center',
      width: '100%',
      marginVertical: 5,
    },
    googleButton: {
      backgroundColor: '#db4437',
      paddingVertical: 15,
      borderRadius: 25,
      alignItems: 'center',
      width: '100%',
      marginVertical: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    link: {
      color: '#007bff',
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
    },
  });

export default styles;