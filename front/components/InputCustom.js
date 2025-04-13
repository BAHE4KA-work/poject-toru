import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const vw = screenWidth / 390;

export default function InputCustom({ placeholder, tittle }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{tittle}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#767982"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    gap: 4 * vw
  },
  label: {
    color: '#767982',
    fontFamily: 'Inter',
    fontSize: 12 * vw,
    fontWeight: '500',
    lineHeight: 20 * vw
  },
  input: {
    width: '100%',
    backgroundColor: '#F6F6F9',
    borderRadius: 8 * vw,
    paddingVertical: 12 * vw,
    paddingHorizontal: 16 * vw,
    fontFamily: 'Inter',
    fontSize: 16 * vw,
    fontWeight: '400',
    color: '#000'
  }
});
