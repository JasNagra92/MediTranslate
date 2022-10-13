import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
interface Props {
  question: string;
  filename: string;
  onPress: (filename: string) => void;
}

const Question: React.FC<Props> = ({question, filename, onPress}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.button}
        activeOpacity={0.7}
        onPress={() => onPress(filename)}>
        <Text style={style.text}>{question}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Question;
const style = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    padding: 40,
    width: '100%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'lightblue',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: '900',
  },
});
