import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = React.useState([]);
  const [modelVisible, setModelVisible] = React.useState(false);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add new goal" color="orange" onPress={() => setModelVisible((current) => !current)} />
        <GoalInput setGoalList={setGoals} modelVisible={modelVisible} setModelVisible={setModelVisible} />
        <GoalItem goals={goals} setGoals={setGoals} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#1e085a',
  },
});
