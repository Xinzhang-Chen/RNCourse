import React from 'react';
import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';

function GoalInput({ setGoalList, modelVisible, setModelVisible }) {
  const [newGoal, setNewGoal] = React.useState('');

  const goalInputHandler = (inputText) => {
    setNewGoal(inputText);
  };

  const addGoalHandler = () => {
    setGoalList((currentList) => [...currentList, newGoal]);
    setNewGoal('');
    setModelVisible((current) => !current);
  };

  return (
    <Modal visible={modelVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.inputField}
          placeholder="please input your goal"
          placeholderTextColor="white"
          onChangeText={goalInputHandler}
          value={newGoal}
        />
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} color="orange" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={() => setModelVisible((current) => !current)} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#311b6b',
  },
  inputField: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    marginRight: 8,
    padding: 3,
    textAlign: 'center',
    color: 'white',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  button: {
    width: 100,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
