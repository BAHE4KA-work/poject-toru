import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

// Получаем ширину экрана для адаптивных размеров
const { width } = Dimensions.get('window');
const vw = width / 390; // Используем деление на стандартный размер для адаптации

const GameTravelCard = ({ text, icon }) => {
  return (
    <View style={styles.card}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    width: 346 * vw, // Адаптируем ширину
    padding: 12 * vw, // Адаптируем отступы
    alignItems: 'flex-start',
    gap: 8 * vw, // Адаптируем расстояние между элементами
    borderRadius: 16 * vw, // Адаптируем радиус границы
    borderWidth: 2 * vw, // Адаптируем толщину границы
    borderColor: '#FFC300',
    backgroundColor: '#FFF',
    overflow: "hidden",
  },
  icon: {
    width: 39 * vw, // Адаптируем размеры иконки
    height: 39 * vw, // Адаптируем размеры иконки
  },
  text: {
    color: '#282B33',
    fontFamily: 'Inter',
    fontSize: 16 * vw, // Адаптируем размер шрифта
    fontWeight: '400',
    textOverflow: 'ellipsis',

  },
});

export default GameTravelCard;
