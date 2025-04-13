// TextCard.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import back from "../assets/Vector 258 (2).png";

const { width } = Dimensions.get('window');
const vw = width / 390;

const TextCard = ({ text1, text2 }) => {
  return (
    <View style={styles.card}>
      <ImageBackground source={back} style={styles.imageBackground}>
        <Text style={styles.text1} numberOfLines={1}>{text1}</Text>
        <Text style={styles.text2} numberOfLines={1}>{text2}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    position: "relative",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 10 * vw,
    borderRadius: 12 * vw,
    borderWidth: 2 * vw,
    borderColor: '#31C2B1',
    backgroundColor: '#FFF',
    width: 170 * vw,  // фиксированная ширина
    height: 70 * vw,  // фиксированная высота
    overflow: 'hidden',  // чтобы текст не выходил за пределы
    marginRight: 10 * vw, // отступ между карточками
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  text1: {
    paddingHorizontal: 12 * vw,
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 16 * vw,
    fontWeight: '400',
    zIndex: 2,
    textAlign: 'left', // текст выровнен по левому краю
    flexWrap: 'nowrap', // текст не переносится
    width: '100%',
  },
  text2: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 16 * vw,
    paddingHorizontal: 12 * vw,
    fontWeight: '400',
    zIndex: 2,
    textAlign: 'left', // текст выровнен по левому краю
    flexWrap: 'nowrap', // текст не переносится
    width: '100%',
  }
});

export default TextCard;
