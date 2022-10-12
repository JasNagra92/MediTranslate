import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import SoundPlayer from 'react-native-sound-player';

const ChestPainQuestions: React.FC<{}> = () => {
  const handlePress = () => {
    try {
      SoundPlayer.playSoundFile('test', 'mp3');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      <View style={style.container}>
        <TouchableOpacity
          style={style.button}
          activeOpacity={0.7}
          onPress={() => handlePress()}>
          <Text style={style.text}>Are you having Chest pain?</Text>
        </TouchableOpacity>
      </View>
      <View style={style.container}>
        <TouchableOpacity style={style.button} activeOpacity={0.7}>
          <Text style={style.text}>Are you Nauseated?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 40,
    width: '100%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'lightblue',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: '900',
  },
});

export default ChestPainQuestions;
