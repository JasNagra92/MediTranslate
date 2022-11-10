import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import DropDownPicker from 'react-native-dropdown-picker';
import {RootStackParamList} from './Types';
import {DrawerScreenProps} from '@react-navigation/drawer';

type Props = DrawerScreenProps<RootStackParamList, 'Home'>;

const Launch: React.FC<Props> = ({navigation}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [items, setItems] = useState<object[]>([
    {label: 'Punjabi', value: 'Punjabi'},
    {label: 'Mandarin', value: 'Mandarin'},
    {label: 'Hindi', value: 'Hindi'},
    {label: 'Arabic', value: 'Arabic'},
    {label: 'Korean', value: 'Korean'},
  ]);

  return (
    <View style={style.mainContainer}>
      <View style={style.container}>
        <Image style={style.image} source={require('../assets/logo.png')} />
      </View>
      <View style={style.test}>
        <Shadow>
          <View style={style.selectContainer}>
            <Text style={style.text}>Select Patients Language</Text>
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
              disabled={value ? false : true}
              onPress={() => navigation.navigate(value as any)}>
              <Text style={style.BtnText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </Shadow>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 0.5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  test: {
    flex: 0.5,
  },
  selectContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    width: 330,
    paddingLeft: 20,
  },
  image: {
    width: 219,
    height: 138,
  },
  text: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    paddingVertical: 10,
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
    marginVertical: 20,
  },
  dropdown: {
    paddingRight: 20,
  },
});

export default Launch;
