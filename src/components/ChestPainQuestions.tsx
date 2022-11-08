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

const ChestPainQuestions: React.FC<Props> = ({route}) => {
  const {language, filename, phonetic, originalText, filetype} = route.params;
  return (
    <View style={style.container}>
      <ScrollView style={style.container}>
        {route.params && (
          <View>
            <Question
              question="Are you having Chest Pain?"
              filename={filename[0]}
              phonetic={phonetic && phonetic[0]}
              language={language}
              filetype={filetype}
              originalText={originalText[0]}
            />
            <Question
              question="When did the pain start?"
              filename={filename[1]}
              phonetic={phonetic && phonetic[1]}
              language={language}
              filetype={filetype}
              originalText={originalText[1]}
            />
            <Question
              question="Are you also Short of Breath?"
              filename={filename[2]}
              phonetic={phonetic && phonetic[2]}
              language={language}
              filetype={filetype}
              originalText={originalText[2]}
            />
            <Question
              question="Is the pain worse when you take a deep breath?"
              filename={filename[3]}
              phonetic={phonetic && phonetic[3]}
              language={language}
              filetype={filetype}
              originalText={originalText[3]}
            />
            <Question
              question="Are you Nauseated?"
              filename={filename[4]}
              phonetic={phonetic && phonetic[4]}
              language={language}
              filetype={filetype}
              originalText={originalText[4]}
            />
            <Question
              question="Does the pain radiate to your back?"
              filename={filename[5]}
              phonetic={phonetic && phonetic[5]}
              language={language}
              filetype={filetype}
              originalText={originalText[5]}
            />
            <Question
              question="Are you Dizzy?"
              filename={filename[6]}
              phonetic={phonetic && phonetic[6]}
              language={language}
              filetype={filetype}
              originalText={originalText[6]}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {height: 1600, flex: 1},
});

export default ChestPainQuestions;
