import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

export default function CustomButton({
  title = 'Я тут был',
  onPress,
  imageSource, 
  showImage = true   // по умолчанию — показываем
  
}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.text}>{title}</Text>
        {showImage && (
          <Image source={imageSource} style={styles.image} resizeMode="contain" />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#658F47',
    backgroundColor: '#658F47',
    paddingVertical: 12,
    paddingHorizontal: 14,
    width: "100%",
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    gap: 4 // если не работает — можно заменить Image на View с marginLeft
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '400'
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: 4
  }
});
