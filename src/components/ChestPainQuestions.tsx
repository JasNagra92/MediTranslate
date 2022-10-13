import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import Question from './Question';

const ChestPainQuestions: React.FC<{}> = () => {
  const handlePress = (filename: string) => {
    try {
      SoundPlayer.playSoundFile(filename, 'mp3');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      <Question
        question="Are you having Chest Pain?"
        onPress={handlePress}
        filename="test"
      />
      <Question
        question="Are you Nauseated?"
        onPress={handlePress}
        filename="q2cp"
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChestPainQuestions;
