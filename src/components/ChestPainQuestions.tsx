import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Question from './Question';

const ChestPainQuestions: React.FC = () => {
  return (
    <View>
      <ScrollView style={style.container}>
        <Question
          question="Are you having Chest Pain?"
          filename="test"
          phonetic="(Sha-tee vich daa-rd hun-dah-ya)"
        />
        <Question
          question="Are you also Short of Breath?"
          filename="q5cp"
          phonetic="(saah vee thu-wa-noo char-dah)"
        />
        <Question
          question="Is the pain worse when you take a deep breath?"
          filename="q6cp"
          phonetic="(lum-bah saah leh-kay daa-rd budth-daah-ya )"
        />
        <Question
          question="Are you Nauseated?"
          filename="q2cp"
          phonetic="(twan-nuu alt-tee awn-nu jee kard-dah-ya)"
        />
        <Question
          question="Does the pain radiate to your back?"
          filename="q3cp"
          phonetic="(daa-rd too-hee vich vee jand-dah-ya)"
        />
        <Question
          question="When did the pain start?"
          filename="q4cp"
          phonetic="(daa-rd shu-ru ku-dho ho-iya)"
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {height: 1200},
});

export default ChestPainQuestions;
