import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Launch from './src/components/Launch';
import AssessmentSelect from './src/components/AssessmentSelect';
import ChestPainQuestions from './src/components/ChestPainQuestions';
import AbdoPainQuestions from './src/components/AbdoPainQuestions';
import MandarinChestPainQuestions from './src/components/MandarinChestPainQuestions';
import MandarinAbdoPainQuestions from './src/components/MandarinAbdoPainQuestions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FullScreen from './src/components/FullScreen';
import SuggestQuestion from './src/components/SuggestQuestion';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        backBehavior="history"
        screenOptions={({navigation}) => ({
          headerRight: () => (
            <Icon
              name="menu"
              size={40}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerLeft: () => (
            <Icon
              name="arrow-back"
              size={40}
              onPress={() => navigation.goBack()}
            />
          ),
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
          options={{drawerItemStyle: {display: 'none'}}}
        />
        <Drawer.Screen
          name="Mandarin"
          component={AssessmentSelect}
          options={{
            drawerItemStyle: {display: 'none'},
          }}
        />
        <Drawer.Screen
          name="FullScreen"
          component={FullScreen}
          options={{
            drawerLabelStyle: {display: 'none'},
            headerShown: false,
            drawerItemStyle: {display: 'none'},
          }}
        />
        <Drawer.Screen
          name="Suggest A Question"
          component={SuggestQuestion}
          options={{
            drawerLabelStyle: style.suggestionLabel,
            drawerItemStyle: style.suggestionItem,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
const style = StyleSheet.create({
  suggestionLabel: {
    color: 'white',
    fontWeight: '700',
  },
  suggestionItem: {
    backgroundColor: 'blue',
  },
});
