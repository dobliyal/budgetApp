import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
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
    inputFocused: {
      borderColor: '#007bff',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      marginBottom: 10,
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
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    link: {
      color: '#007bff',
      textAlign: 'center',
      marginTop: 15,
      fontSize: 16,
    },
  });


  export default styles;