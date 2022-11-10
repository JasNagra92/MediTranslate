import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Launch from './src/components/Launch';
import AssessmentSelect from './src/components/AssessmentSelect';
import ChestPainQuestions from './src/components/ChestPainQuestions';
import AbdoPainQuestions from './src/components/AbdoPainQuestions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FullScreen from './src/components/FullScreen';
import SuggestQuestion from './src/components/SuggestQuestion';
import {
  punjabiCP,
  punjabiAP,
  mandarinCP,
  mandarinAP,
  hindiCP,
  hindiAP,
  arabicCP,
  arabicAP,
} from './src/components/LanguageHelper2';

import {RootStackParamList} from './src/components/Types';

const Drawer = createDrawerNavigator<RootStackParamList>();

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
          name="Punjabi Chest Pain"
          component={ChestPainQuestions}
          initialParams={{
            language: 'Punjabi',
            questions: punjabiCP,
          }}
        />
        <Drawer.Screen
          name="Punjabi Abdo Pain"
          component={AbdoPainQuestions}
          initialParams={{
            language: 'Punjabi',
            questions: punjabiAP,
          }}
        />
        <Drawer.Screen
          name="Mandarin Chest Pain"
          component={ChestPainQuestions}
          initialParams={{
            language: 'Mandarin',
            questions: mandarinCP,
          }}
        />
        <Drawer.Screen
          name="Mandarin Abdo Pain"
          component={AbdoPainQuestions}
          initialParams={{
            language: 'Mandarin',
            questions: mandarinAP,
          }}
        />
        <Drawer.Screen
          name="Hindi Chest Pain"
          component={ChestPainQuestions}
          initialParams={{
            language: 'Hindi',
            questions: hindiCP,
          }}
        />
        <Drawer.Screen
          name="Hindi Abdo Pain"
          component={AbdoPainQuestions}
          initialParams={{
            language: 'Hindi',
            questions: hindiAP,
          }}
        />
        <Drawer.Screen
          name="Arabic Chest Pain"
          component={ChestPainQuestions}
          initialParams={{
            language: 'Arabic',
            questions: arabicCP,
          }}
        />
        <Drawer.Screen
          name="Arabic Abdo Pain"
          component={AbdoPainQuestions}
          initialParams={{
            language: 'Arabic',
            questions: arabicAP,
          }}
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
          name="Hindi"
          component={AssessmentSelect}
          options={{
            drawerItemStyle: {display: 'none'},
          }}
        />
        <Drawer.Screen
          name="Arabic"
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
