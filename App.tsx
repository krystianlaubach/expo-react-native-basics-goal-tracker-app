import { useState } from 'react';
import { Button, FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

type Goal = {
  id: string,
  text: string,
};

export default function App() {
  const [courseGoals, setCourseGoals] = useState<Array<Goal>>([]);
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  const showModal = () => {
    setDisplayModal(true);
  };

  const hideModal = () => {
    setDisplayModal(false)
  };

  const addGoalHandler = (enteredGoalText: string) => {
    if (enteredGoalText.trim().length === 0) {
      return;
    }

    setCourseGoals((currentCourseGoals: Array<Goal>) => [
      ...currentCourseGoals,
      {
        id: Math.random().toString(),
        text: enteredGoalText,
      }
    ]);

    hideModal();
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals((currentCourseGoals: Array<Goal>) => {
      return currentCourseGoals.filter((goal: Goal) => goal.id !== id);
    });
  };

  const renderGoals = (itemData: ListRenderItemInfo<any>) => {
    const goal: Goal = itemData.item;

    return (
        <GoalItem id={ goal.id } text={ goal.text } onDelete={ deleteGoalHandler } />
    );
  };

  const getKey = (goal: Goal, index: number) => {
    return goal.id;
  };

  return (
    <>
      <StatusBar style='dark' />
      <View style={ styles.appContainer }>
        <Button title='Add New Goal' color='#FFCC00' onPress={ showModal } />
        { displayModal && <GoalInput visible={ displayModal } onHide={ hideModal } onSubmit={ addGoalHandler }/> }
        <View style={ styles.goalsContainer }>
          <FlatList data={ courseGoals } renderItem={ renderGoals } keyExtractor={ getKey } />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    marginTop: 16,
    flex: 7,
  },
});
