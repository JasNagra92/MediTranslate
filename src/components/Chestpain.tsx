import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import ChestPainQuestions from './ChestPainQuestions';
interface Props {
  handlePress: (filename: string) => void;
}

const Chestpain: React.FC<Props> = ({handlePress}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View>
      <TouchableOpacity
        style={style.button}
        onPress={() => setIsOpen(!isOpen)}
        activeOpacity={0.7}>
        <Text style={style.text}>Chest Pain</Text>
      </TouchableOpacity>
      {isOpen && (
        <ScrollView>
          <ChestPainQuestions handlePress={handlePress} />
        </ScrollView>
      )}
    </View>
  );
};

const style = StyleSheet.create({
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
