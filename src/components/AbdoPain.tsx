import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import AbdoPainQuestions from './AbdoPainQuestions';

const AbdoPain: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View>
      <TouchableOpacity
        style={style.button}
        onPress={() => setIsOpen(!isOpen)}
        activeOpacity={0.7}>
        <Text style={style.text}>Abdo Pain</Text>
      </TouchableOpacity>
      {isOpen && (
        <ScrollView>
          <AbdoPainQuestions />
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
});

export default AbdoPain;
