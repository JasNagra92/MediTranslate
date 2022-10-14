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
        question="Use your hand to show me where the pain is"
        onPress={handlePress}
        filename="q1ap"
        phonetic="(haa-th naal meh-nu thi-kah daa-rd kith-eh aah)"
      />
      <Question
        question="Are you Nauseated?"
        onPress={handlePress}
        filename="q2cp"
        phonetic="(twan-nuu alt-tee awn-nu jee kard-dah-ya)"
      />
      <Question
        question="Have you thrown up today?"
        onPress={handlePress}
        filename="q3ap"
        phonetic="(ul-tee aaj twan-nuu aiee ah)"
      />
      <Question
        question="Was there any blood in your vomit?"
        onPress={handlePress}
        filename="q4ap"
        phonetic="(twan-nuu ul-tee vich koon suh-gah)"
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {height: 1100},
});

export default AbdoPainQuestions;
