import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Question from './Question';
interface Props {
  route?: {
    params: {language: string};
  };
}

const MandarinChestPainQuestions: React.FC<Props> = ({route}) => {
  const {language} = route.params;
  return (
    <View style={style.container}>
      <ScrollView style={style.container}>
        <Question
          question="Are you having Chest Pain chinese?"
          filename="q1cpm"
          language={language}
          filetype="wav"
          originalText="你的胸口痛吗？"
        />
        <Question
          question="When did the pain start?"
          filename="q2cpm"
          language={language}
          filetype="wav"
          originalText="什么时候开始痛的？"
        />
        <Question
          question="Are you also Short of Breath?"
          filename="q3cpm"
          language={language}
          filetype="wav"
          originalText="你也呼吸短促吗？"
        />
        <Question
          question="Is the pain worse when you take a deep breath?"
          filename="q4cpm"
          language={language}
          filetype="wav"
          originalText="深呼吸的时候疼的更厉害吗？"
        />
        <Question
          question="Are you Nauseated?"
          filename="q5cpm"
          language={language}
          filetype="wav"
          originalText="你感到恶心吗？"
        />
        <Question
          question="Does the pain radiate to your back?"
          filename="q6cpm"
          language={language}
          filetype="wav"
          originalText="疼痛会辐射到你的背部吗？"
        />
        <Question
          question="Are you Dizzy?"
          filename="q7cpm"
          language={language}
          filetype="wav"
          originalText="你头晕吗"
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {height: 1600, flex: 1},
});

export default MandarinChestPainQuestions;
