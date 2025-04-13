import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function ReviewInput({
  label = 'Отзыв',
  placeholder = 'Оставьте свои впечатления тут',
  onChangeText
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999EA4"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: "100%",
  },
  label: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    color: '#767982',
    lineHeight: 24,
    marginBottom: 4
  },
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F6F6F9',
    borderRadius: 16,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#000'
  }
});
