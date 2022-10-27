import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

const FullScreen: React.FC = () => {
  const route = useRoute();
  return (
    <View style={style.container}>
      <Text style={style.text}>{route.params.text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
});

export default FullScreen;
