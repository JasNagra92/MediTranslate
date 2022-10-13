import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Question from './Question';
interface Props {
  handlePress: (filename: string) => void;
}

const AbdoPainQuestions: React.FC<Props> = ({handlePress}) => {
  return (
    <ScrollView style={style.container}>
      <Question
        question="Are you having Chest Pain?"
        onPress={handlePress}
        filename="test"
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {height: 600},
});

export default AbdoPainQuestions;
