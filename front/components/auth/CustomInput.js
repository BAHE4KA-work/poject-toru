import React from 'react';
import { View, TextInput, StyleSheet, Image, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const vw = screenWidth / 390; // база от макета

export default function CustomInput({
  placeholder = 'Email',
  icon,
  value,
  onChangeText,
  isPassword = false,
}) {
  return (
    <View style={styles.container}>
      {icon && <Image source={icon} style={styles.icon} resizeMode="contain" />}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword}
        numberOfLines={1}
        ellipsizeMode="tail"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3 * vw,
    paddingHorizontal: 12 * vw,
    gap: 10 * vw,
    borderWidth: 1,
    borderColor: '#31C2B1',
    borderRadius: 16 * vw,
    backgroundColor: '#F6F6F9',
    overflow: 'hidden'
  },
  icon: {
    width: 20 * vw,
    height: 20 * vw,
    flexShrink: 0,
    tintColor: '#767982'
  },
  input: {
    flex: 1,
    fontSize: 16 * vw,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.8)',
    lineHeight: 20 * vw
  }
});
