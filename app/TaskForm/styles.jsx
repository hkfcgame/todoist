import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#488dc8',
    padding: 10,
    width: '83%',
    height: 50,
  },
  button: {
    backgroundColor: '#488dc8',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  buttonLabel: {
    color: '#ffffff',
    fontSize: 20,
  },
})