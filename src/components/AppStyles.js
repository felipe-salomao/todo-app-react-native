import { StyleSheet, Platform, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
  },
  pageTitle: {
    marginBottom: 10,
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
  separator: {
    marginHorizontal: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  listView: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 5,
    paddingLeft: 15,
    paddingBottom: 5,
  },
  emptyListText: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 15,
    fontSize: 15,
    lineHeight: 20,
    color: '#737373',
  },
});
