import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Chestpain from './src/components/Chestpain';
import Header from './src/components/Header';
import AbdoPain from './src/components/AbdoPain';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.MainContainer}>
        <Header title="Quick-Assess" />
        <View style={styles.container}>
          <Chestpain />
          <AbdoPain />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
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
