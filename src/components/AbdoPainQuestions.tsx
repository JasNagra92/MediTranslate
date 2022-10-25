import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Question from './Question';
interface Props {
  route?: {
    params: {language: string};
  };
}

const AbdoPainQuestions: React.FC<Props> = ({route}) => {
  const {language} = route.params;
  return (
    <ScrollView style={style.container}>
      <Question
        question="Use your hand to show me where the pain is"
        filename="q1ap"
        phonetic="haa-th naal meh-nu thi-kah daa-rd kith-eh aah"
        language={language}
        filetype="mp3"
      />
      <Question
        question="Are you Nauseated?"
        filename="q2cp"
        phonetic="twan-nuu alt-tee awn-nu jee kard-dah-ya"
        language={language}
        filetype="mp3"
      />
      <Question
        question="Have you thrown up today?"
        filename="q3ap"
        phonetic="ul-tee aaj twan-nuu aiee ah"
        language={language}
        filetype="mp3"
      />
      <Question
        question="Was there any blood in your vomit?"
        filename="q4ap"
        phonetic="twan-nuu ul-tee vich koon suh-gah"
        language={language}
        filetype="mp3"
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {height: 1600, flex: 1},
});

export default AbdoPainQuestions;
