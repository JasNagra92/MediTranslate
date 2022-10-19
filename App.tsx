import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Chestpain from './src/components/Chestpain';
import Header from './src/components/Header';
import AbdoPain from './src/components/AbdoPain';
import Launch from './src/components/Launch';
import PunjabiAssess from './src/components/PunjabiAssess';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Launch} />
        <Stack.Screen name="Punjabi" component={PunjabiAssess} />
      </Stack.Navigator>
      {/* <SafeAreaProvider>
        <SafeAreaView style={styles.MainContainer}>
          <Header title="Quick-Assess" />
          <View style={styles.container}>
            <Chestpain />
            <AbdoPain />
          </View>
          <Launch />
        </SafeAreaView>
      </SafeAreaProvider> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {flex: 1},
});

export default App;
