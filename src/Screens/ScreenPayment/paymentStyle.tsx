import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressableArea: {
    flex: 1,
  },
  blurView: {
    height: '40%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    elevation: 8,
    shadowColor: '#000',
    shadowRadius: 8,
    shadowOpacity: 0.15,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cancelButtonText: {
    color: '#007AFF',
    fontSize: 17,
  },
  content: {
    gap: 10,
    paddingTop: 16,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'gray',
  },
  savingsText: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '900',
    marginTop: 16,
  },
  infoText: {
    textAlign: 'center',
  },
  premiumButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginTop: 16,
  },
  premiumButtonText: {
    fontWeight: '700',
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
  },
  maybeLaterText: {
    color: 'gray',
    fontSize: 17,
    textAlign: 'center',
  },
});
