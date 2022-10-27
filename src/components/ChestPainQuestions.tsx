import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Question from './Question';
interface Props {
  route?: {
    params: {language: string};
  };
}

const ChestPainQuestions: React.FC<Props> = ({route}) => {
  const {language} = route.params;
  return (
    <View style={style.container}>
      <ScrollView style={style.container}>
        <Question
          question="Are you having Chest Pain?"
          filename="test"
          phonetic="Sha-tee vich daa-rd hun-dah-ya"
          language={language}
          filetype="mp3"
          originalText="ਕੀ ਤੁਹਾਨੂੰ ਛਾਤੀ ਵਿੱਚ ਦਰਦ ਹੈ?"
        />
        <Question
          question="When did the pain start?"
          filename="q4cp"
          phonetic="daa-rd shu-ru ku-dho ho-iya"
          language={language}
          filetype="mp3"
          originalText="ਦਰਦ ਕਦੋਂ ਸ਼ੁਰੂ ਹੋਇਆ?"
        />
        <Question
          question="Are you also Short of Breath?"
          filename="q5cp"
          phonetic="(saah vee thu-wa-noo char-dah)"
          language={language}
          filetype="mp3"
          originalText="ਸਾਹ ਲੈਣ ਵਿੱਚ ਮੁਸ਼ਕਲ ਹੈ"
        />
        <Question
          question="Is the pain worse when you take a deep breath?"
          filename="q6cp"
          phonetic="lum-bah saah leh-kay daa-rd budth-daah-ya"
          language={language}
          filetype="mp3"
          originalText="ਜਦੋਂ ਤੁਸੀਂ ਡੂੰਘਾ ਸਾਹ ਲੈਂਦੇ ਹੋ ਤਾਂ ਦਰਦ ਹੋਰ ਵੀ ਵੱਧ ਜਾਂਦਾ ਹੈ"
        />
        <Question
          question="Are you Nauseated?"
          filename="q2cp"
          phonetic="twan-nuu alt-tee awn-nu jee kard-dah-ya"
          language={language}
          filetype="mp3"
          originalText="ਕੀ ਤੁਸੀਂ ਉਲਟੀ ਕਰਨ ਜਾ ਰਹੇ ਹੋ?"
        />
        <Question
          question="Does the pain radiate to your back?"
          filename="q3cp"
          phonetic="daa-rd too-hee vich vee jand-dah-ya"
          language={language}
          filetype="mp3"
          originalText="ਕੀ ਤੁਹਾਨੂੰ ਪਿੱਠ ਵਿੱਚ ਦਰਦ ਹੈ?"
        />
        <Question
          question="Are you Dizzy?"
          filename="q7cp"
          phonetic="twan-nuu Chak-rr awn-dah-ya"
          language={language}
          filetype="mp3"
          originalText="ਕੀ ਤੁਹਾਨੂੰ ਚੱਕਰ ਆ ਰਹੇ ਹਨ"
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {height: 1600, flex: 1},
});

export default ChestPainQuestions;
