import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  inputField: {
    flex: 1,
    height: 42,
    marginRight: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    color: '#000000',
    fontSize: 15,
    textAlignVertical: 'center',
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    borderRadius: 21,
    backgroundColor: '#000000',
    shadowColor: '#000000',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});
