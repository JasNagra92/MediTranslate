import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Question from './Question';
import {Props} from './Types';

const AbdoPainQuestions: React.FC<Props> = ({route}) => {
  const {language, questions} = route.params;
  return (
    <ScrollView style={style.container}>
      {route.params &&
        questions.map((question, index) => {
          return (
            <Question
              key={index}
              question={question.question}
              language={language}
              filename={question.filename}
              originalText={question.originalText}
              phonetic={question.phonetic && question.phonetic}
              filetype={question.filetype}
            />
          );
        })}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {height: 1600, flex: 1},
});

export default AbdoPainQuestions;
