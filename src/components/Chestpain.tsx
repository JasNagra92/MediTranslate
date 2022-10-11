import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ChestPainQuestions from './ChestPainQuestions';

const Chestpain: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.button}
        onPress={() => setIsOpen(!isOpen)}
        activeOpacity={0.7}>
        <Text style={style.text}>Chest Pain</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={style.container}>
          <ChestPainQuestions />
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 40,
    width: '100%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'lightgreen',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
});

export default Chestpain;
