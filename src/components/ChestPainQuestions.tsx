import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Question from './Question';
interface Props {
  handlePress: (filename: string) => void;
}

const ChestPainQuestions: React.FC<Props> = ({handlePress}) => {
  return (
    <ScrollView style={style.container}>
      <Question
        question="Are you having Chest Pain?"
        onPress={handlePress}
        filename="test"
      />
      <Question
        question="Are you also Short of Breath?"
        onPress={handlePress}
        filename="q5cp"
      />
      <Question
        question="Is the pain worse when you take a deep breath?"
        onPress={handlePress}
        filename="q6cp"
      />
      <Question
        question="Are you Nauseated?"
        onPress={handlePress}
        filename="q2cp"
      />
      <Question
        question="Does the pain radiate to your back?"
        onPress={handlePress}
        filename="q3cp"
      />
      <Question
        question="When did the pain start?"
        onPress={handlePress}
        filename="q4cp"
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {height: 600},
});

export default ChestPainQuestions;
