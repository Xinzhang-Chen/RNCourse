import React from 'react';
import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';

function GoalItem({ goals, setGoals }) {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        renderItem={(currentGoal) => {
          return (
            <Pressable
              onPress={() => {
                setGoals((initialGoals) => {
                  return initialGoals.filter((item, index) => index !== currentGoal.index);
                });
              }}
              style={({ pressed }) => pressed && styles.pressedState}
            >
              <View style={styles.goalItem} key={currentGoal.index}>
                <Text style={styles.goalText}>{currentGoal.item}</Text>
              </View>
            </Pressable>
          );
        }}
        alwaysBounceVertical={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
  pressedState: {
    opacity: 0.5,
  },
});

export default GoalItem;
