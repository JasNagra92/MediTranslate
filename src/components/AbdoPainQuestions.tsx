import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Question from './Question';
interface Props {
  route?: {
    params: {
      language: string;
      filename: string[];
      phonetic?: string[];
      originalText: string[];
      filetype: string;
    };
  };
}

const AbdoPainQuestions: React.FC<Props> = ({route}) => {
  const {language, filename, filetype, phonetic, originalText} = route.params;
  return (
    <ScrollView style={style.container}>
      {route.params && (
        <View>
          <Question
            question="Use your hand to show me where the pain is"
            filename={filename[7]}
            phonetic={phonetic && phonetic[7]}
            language={language}
            filetype={filetype}
            originalText={originalText[7]}
          />
          <Question
            question="Are you Nauseated?"
            filename={filename[8]}
            phonetic={phonetic && phonetic[8]}
            language={language}
            filetype={filetype}
            originalText={originalText[8]}
          />
          <Question
            question="Have you thrown up today?"
            filename={filename[9]}
            phonetic={phonetic && phonetic[9]}
            language={language}
            filetype={filetype}
            originalText={originalText[9]}
          />
          <Question
            question="Was there any blood in your vomit?"
            filename={filename[10]}
            phonetic={phonetic && phonetic[10]}
            language={language}
            filetype={filetype}
            originalText={originalText[10]}
          />
        </View>
      )}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {height: 1600, flex: 1},
});

export default AbdoPainQuestions;
