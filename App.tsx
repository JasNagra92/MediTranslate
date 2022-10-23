import 'react-native-gesture-handler';
import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Launch from './src/components/Launch';
import AssessmentSelect from './src/components/AssessmentSelect';
import ChestPainQuestions from './src/components/ChestPainQuestions';
import AbdoPainQuestions from './src/components/AbdoPainQuestions';
import MandarinChestPainQuestions from './src/components/MandarinChestPainQuestions';
import MandarinAbdoPainQuestions from './src/components/MandarinAbdoPainQuestions';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        backBehavior="initialRoute"
        screenOptions={({navigation}) => ({
          headerRight: () => (
            <Button title="menu" onPress={() => navigation.openDrawer()} />
          ),
          headerLeftContainerStyle: {display: 'none'},
          headerTitleStyle: {display: 'none'},
          drawerPosition: 'right',
        })}>
        <Drawer.Screen name="Home" component={Launch} />
        <Drawer.Screen
          name="Punjabi Chest pain"
          component={ChestPainQuestions}
          initialParams={{language: 'Punjabi'}}
        />
        <Drawer.Screen
          name="Punjabi Abdo pain"
          component={AbdoPainQuestions}
          initialParams={{language: 'Punjabi'}}
        />
        <Drawer.Screen
          name="Mandarin Chest pain"
          component={MandarinChestPainQuestions}
          initialParams={{language: 'Mandarin'}}
        />
        <Drawer.Screen
          name="Mandarin Abdo pain"
          component={MandarinAbdoPainQuestions}
          initialParams={{language: 'Mandarin'}}
        />
        <Drawer.Screen
          name="Punjabi"
          component={AssessmentSelect}
          options={{drawerLabelStyle: {display: 'none'}}}
        />
        <Drawer.Screen
          name="Mandarin"
          component={AssessmentSelect}
          options={{drawerLabelStyle: {display: 'none'}}}
        />
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
