import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsItem = ({ image, onPress, title = "Настройки", onChangeImage }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        {/* Если передано изображение через пропс, отображаем его */}
        <TouchableOpacity onPress={onChangeImage}>
          <Image source={image} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={24} color="#282B33" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    color: '#282B33',
    marginLeft: 12,
  },
  image: {
    width: 30,  // Размер иконки изображения
    height: 30,
    borderRadius: 20, // Округление изображения
  },
});

export default SettingsItem;
