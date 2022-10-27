import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSound} from './hooks/useSound';

const FullScreen: React.FC = () => {
  const {play} = useSound();
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text style={style.text}>{route.params.text}</Text>
      <Pressable style={style.icon} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={40} color="white" />
      </Pressable>
      <Pressable
        style={style.icon2}
        onPress={() => play(route.params.filename, route.params.filetype)}>
        <Icon name="play-circle-fill" size={40} color="white" />
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    transform: [{rotate: '90deg'}],
  },
  icon: {
    position: 'absolute',
    left: 35,
    top: 300,
    transform: [{rotate: '90deg'}],
  },
  icon2: {
    position: 'absolute',
    left: 35,
    bottom: 300,
    transform: [{rotate: '90deg'}],
  },
});

export default FullScreen;
