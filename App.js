import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const goalInputHandler = (inputText) => {
    console.log(inputText);
  };

  const addGoalHandler = () => {};

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputField} placeholder="please input your goal" onChangeText={goalInputHandler} />
        <Button title="add goal" />
      </View>

      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: 'column',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flex: 1,
  },
  inputField: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#cccccc',
    marginRight: 8,
    padding: 3,
  },
  goalsContainer: {
    flex: 5,
  },
});
