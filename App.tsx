import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Chestpain from './src/components/Chestpain';
import SoundPlayer from 'react-native-sound-player';
import Header from './src/components/Header';
import AbdoPain from './src/components/AbdoPain';

const App = () => {
  const handlePress = (filename: string) => {
    try {
      SoundPlayer.playSoundFile(filename, 'mp3');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <Header title="MediTranslate" />
      <View style={styles.container}>
        <Chestpain handlePress={handlePress} />
        <AbdoPain handlePress={handlePress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  container: {flex: 1},
});

export default App;
