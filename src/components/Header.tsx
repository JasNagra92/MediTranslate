import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
interface Props {
  title: string;
}

const Header: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.header}>
      <View style={styles.titleBox}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 20,
  },
  titleBox: {
    width: '50%',
    alignSelf: 'center',
  },
});

export default Header;
