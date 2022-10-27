import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Question from './Question';
interface Props {
  route?: {
    params: {language: string};
  };
}

const MandarinAbdoPainQuestions: React.FC<Props> = ({route}) => {
  const {language} = route.params;
  return (
    <ScrollView style={style.container}>
      <Question
        question="Use your hand to show me where the pain is"
        filename="q1apm"
        language={language}
        filetype="wav"
        originalText="用你的手指给我看哪里疼?"
      />
      <Question
        question="Are you Nauseated?"
        filename="q2cp"
        language={language}
        filetype="wav"
        originalText="你感到恶心吗?"
      />
      <Question
        question="Have you thrown up today?"
        filename="q3apm"
        language={language}
        filetype="wav"
        originalText="你今天吐了吗?"
      />
      <Question
        question="Was there any blood in your vomit?"
        filename="q4apm"
        language={language}
        filetype="wav"
        originalText="你的呕吐物中有血吗?"
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {height: 1600, flex: 1},
});

export default MandarinAbdoPainQuestions;
