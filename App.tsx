import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Chestpain from './src/components/Chestpain';
import Header from './src/components/Header';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Emergency Punjabi Translator" />
      <Chestpain />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
});

export default App;
