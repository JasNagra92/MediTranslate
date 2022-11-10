import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Shadow} from 'react-native-shadow-2';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  question: string;
  filename: string;
  phonetic?: string;
  language: string;
  filetype: string;
  originalText?: string;
}
import {useSound} from './hooks/useSound';

const Question: React.FC<Props> = ({
  question,
  filename,
  phonetic,
  language,
  filetype,
  originalText,
}) => {
  const navigation = useNavigation();
  const {play} = useSound();
  const [text, setText] = useState(phonetic ? 'phonetic' : 'original');
  return (
    <View style={style.container}>
      <View style={style.topContainer}>
        <Text style={style.text}>{question}</Text>
      </View>
      <Shadow
        stretch={true}
        style={style.shadowContainer}
        containerStyle={style.buttonContainer}>
        <TouchableOpacity
          style={style.button}
          activeOpacity={0.7}
          onPress={() => play(filename, filetype)}>
          <Text style={style.textLang}>{language}</Text>
          {text === 'phonetic' && <Text style={style.text}>{phonetic}</Text>}
          {text === 'original' && (
            <Text style={style.text}>{originalText}</Text>
          )}
          <View style={style.iconContainer}>
            <Pressable
              onPress={() =>
                navigation.navigate('FullScreen', {
                  text: `${originalText}`,
                  filename: `${filename}`,
                  filetype: `${filetype}`,
                })
              }>
              <Icon name="expand" size={30} color="white" />
            </Pressable>
            <Icon name="play-circle-fill" size={30} color="white" />
            {phonetic && originalText ? (
              <Pressable
                onPress={() =>
                  setText(text === 'phonetic' ? 'original' : 'phonetic')
                }>
                <Icon name="flip" size={30} color="white" />
              </Pressable>
            ) : null}
          </View>
        </TouchableOpacity>
      </Shadow>
      <View style={style.line} />
    </View>
  );
};
export default Question;
const style = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-evenly',
  },
  topContainer: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'rgba(70, 111, 255, 0.78)',
    alignSelf: 'center',
    marginVertical: 10,
    padding: 20,
  },
  button: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'black',
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    color: 'white',
    padding: 3,
  },
  textLang: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    padding: 3,
    fontWeight: '700',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  shadowContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  iconContainer: {
    alignSelf: 'center',
    width: '100%',
    paddingTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
