import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import ChestPainQuestions from './ChestPainQuestions';

const Chestpain: React.FC = () => {
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
        <ScrollView>
          <ChestPainQuestions />
        </ScrollView>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    padding: 40,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'lightgreen',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
  container: {
    marginBottom: 1,
  },
});

export default Chestpain;
