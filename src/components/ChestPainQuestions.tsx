import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Question from './Question';
import {QuestionType} from './Types';

interface Props {
  route?: {
    params: {
      language: string;
      questions: Array<QuestionType>;
    };
  };
}

const ChestPainQuestions: React.FC<Props> = ({route}) => {
  const {language, questions} = route.params;
  return (
    <View style={style.container}>
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
    </View>
  );
};

const style = StyleSheet.create({
  container: {height: 1600, flex: 1},
});

export default ChestPainQuestions;
