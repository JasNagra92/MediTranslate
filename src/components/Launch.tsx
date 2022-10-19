import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import DropDownPicker from 'react-native-dropdown-picker';
interface props {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const Launch: React.FC<props> = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Punjabi', value: 'Punjabi'},
    {label: 'Mandarin', value: 'Mandarin'},
  ]);

  return (
    <View style={style.mainContainer}>
      <View style={style.container}>
        <Image style={style.image} source={require('../assets/logo.png')} />
      </View>
      <Shadow>
        <View style={style.selectContainer}>
          <Text style={style.text}>Select your Language</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            containerStyle={style.dropdown}
          />
          <TouchableOpacity
            style={style.button}
            onPress={() => navigation.navigate('Punjabi')}>
            <Text style={style.BtnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Shadow>
      <View style={style.container} />
    </View>
  );
};
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 0.3,
    alignSelf: 'center',
    paddingTop: 60,
  },
  selectContainer: {
    flex: 0.3,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    width: 330,
    height: 194,
    paddingLeft: 20,
    paddingTop: 20,
  },
  image: {
    width: 219,
    height: 138,
  },
  text: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
  },
  BtnText: {
    color: 'white',
    fontWeight: '700',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#466FFF',
    borderRadius: 15,
    width: 290,
    height: 57,
    marginTop: 20,
  },
  dropdown: {
    paddingRight: 20,
    marginTop: 10,
  },
});

export default Launch;
