import React from 'react';
import {Shadow} from 'react-native-shadow-2';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const PunjabiAssess: React.FC = () => {
  return (
    <View style={style.mainContainer}>
      <Shadow
        stretch={true}
        style={style.shadowContainer}
        containerStyle={style.buttonContainer}>
        <TouchableOpacity style={style.button}>
          <Text style={style.text}>Chest Pain</Text>
        </TouchableOpacity>
      </Shadow>
      <Shadow
        style={style.shadowContainer}
        stretch={true}
        containerStyle={style.buttonContainer}>
        <TouchableOpacity style={style.button}>
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

export default PunjabiAssess;
