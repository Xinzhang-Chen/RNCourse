import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputField} placeholder="please input your goal" />
        <Button title="add goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputField: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#cccccc',
    marginRight: 8,
    padding: 3,
  },
});
