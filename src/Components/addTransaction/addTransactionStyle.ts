import { StyleSheet } from 'react-native';

export const stylesButton = StyleSheet.create({
  button: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007BFF20',
    borderRadius: 15,
  },
  text: {
    fontWeight: '700',
    color: '#007BFF',
    marginLeft: 5,
  },
});

export const stylesCategory = StyleSheet.create({
  button: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 6,
  },
  text: {
    fontWeight: '700',
    marginLeft: 5,
  },
});

export const stylesAddTransaction = StyleSheet.create({
    container: {
        marginBottom: 15,
    }
   
  });


  export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    permissionContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      flex: 1,
    },
    cancelButton: {
      padding: 100,
    },
    cancelText: {
      color: 'white',
      top: 80,
      left: 80,
    },
  });


export const stylesForm = StyleSheet.create({
  amountInput: {
    fontSize: 32,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  descriptionInput: {
    marginBottom: 15,
  },
  entryTypeText: {
    marginBottom: 6,
  },
  segmentedControl: {
    marginBottom: 15,
  },
  scanButton: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  scanButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

  
