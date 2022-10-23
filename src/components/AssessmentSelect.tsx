import React from 'react';
import {Shadow} from 'react-native-shadow-2';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
interface Props {
  navigation: {
    navigate: (screen: string, route: {language: string}) => void;
  };
}

const AssessmentSelect: React.FC<Props> = ({navigation}) => {
  const route = useRoute();
  return (
    <View style={style.mainContainer}>
      <Shadow
        stretch={true}
        style={style.shadowContainer}
        containerStyle={style.buttonContainer}>
        <TouchableOpacity
          style={style.button}
          onPress={() =>
            navigation.navigate(`${route.name} Chest pain`, {
              language: `${route.name}`,
            })
          }>
          <Text style={style.text}>Chest Pain</Text>
        </TouchableOpacity>
      </Shadow>
      <Shadow
        style={style.shadowContainer}
        stretch={true}
        containerStyle={style.buttonContainer}>
        <TouchableOpacity
          style={style.button}
          onPress={() =>
            navigation.navigate('Punjabi Abdo pain', {language: 'punjabi'})
          }>
          <Text style={style.text}>Abdo pain</Text>
        </TouchableOpacity>
      </Shadow>
    </View>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    marginVertical: 20,
    height: 100,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#466FFF',
  },
  shadowContainer: {
    height: 100,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: 'white',
    fontFamily: 'Poppins-Black',
    fontWeight: '700',
    fontSize: 32,
  },
});

export default AssessmentSelect;
