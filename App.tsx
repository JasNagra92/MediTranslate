import 'react-native-gesture-handler';
import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Launch from './src/components/Launch';
import AssessmentSelect from './src/components/AssessmentSelect';
import ChestPainQuestions from './src/components/ChestPainQuestions';
import MandarinChestPainQuestions from './src/components/MandarinChestPainQuestions';
import AbdoPainQuestions from './src/components/AbdoPainQuestions';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Launch}
          options={{
            headerRight: () => <Button title="settings" />,
          }}
        />
        <Stack.Screen name="Punjabi" component={AssessmentSelect} />
        <Stack.Screen name="Mandarin" component={AssessmentSelect} />
        <Stack.Screen
          name="Punjabi Chest pain"
          component={ChestPainQuestions}
        />
        <Stack.Screen
          name="Mandarin Chest pain"
          component={MandarinChestPainQuestions}
        />
        <Stack.Screen name="Punjabi Abdo pain" component={AbdoPainQuestions} />
      </Stack.Navigator> */}
      <Drawer.Navigator>
        <Drawer.Screen name="home" component={Launch} />
      </Drawer.Navigator>
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
