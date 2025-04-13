import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Импортируем useNavigation для навигации

import clock from "../assets/clock-fast-forward (1).png";
import flag from "../assets/flag-01.png";
import star from "../assets/Rating icon.png";

const { width } = Dimensions.get('window');
const vw = width / 390;

const EventCard = ({ image, title, duration, places, rating, onPress }) => {
  const navigation = useNavigation(); // Получаем объект навигации

  // Обработчик нажатия на карточку
  const handlePress = () => {
    if (onPress) {
      onPress(); // Если передан onPress, вызываем его
    } else {
      navigation.navigate('MapScreen'); // Переход на страницу с деталями события
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.details}>
          <View style={{ alignItems: "center", flexDirection: "row", gap: 1 }}>
            <Image style={{ width: 16 * vw, height: 16 * vw }} source={clock}></Image>
            <Text style={styles.duration}>{duration}</Text>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row", gap: 1 }}>
            <Image style={{ width: 16 * vw, height: 16 * vw }} source={flag}></Image>
            <Text style={styles.places}>{places} мест</Text>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row", gap: 1 }}>
            <Image style={{ width: 16 * vw, height: 16 * vw }} source={star}></Image>
            <Text style={styles.rating}>{rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 12 * vw,
    borderRadius: 24 * vw,
    backgroundColor: '#FFF',
    boxShadow: '0px 18.493px 73.972px 0px rgba(0, 0, 0, 0.05)',
    width: 326 * vw,
    height: 291 * vw,
    flexShrink: 0,
  },
  image: {
    width: '100%',
    width: 302.619 * vw,
    height: 177.032 * vw,
    borderRadius: 12 * vw,
    objectFit: 'cover',
  },
  content: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16 * vw,
    paddingTop: 8 * vw,
  },
  title: {
    fontFamily: 'Manrope',
    fontSize: 20 * vw,
    fontWeight: '400',
    color: '#0A2753',
    lineHeight: 27 * vw,
    textOverflow: 'ellipsis',
    marginTop: "5%",
  },
  details: {
    flexDirection: 'row',
    gap: 8 * vw,
    justifyContent: "space-between",
    width: "100%",
  },
  duration: {
    fontFamily: 'Inter',
    fontSize: 12 * vw,
    fontWeight: '300',
    color: '#282B33',
    lineHeight: 18 * vw,
  },
  places: {
    fontFamily: 'Inter',
    fontSize: 12 * vw,
    fontWeight: '300',
    color: '#282B33',
    lineHeight: 18 * vw,
  },
  rating: {
    fontFamily: 'Inter',
    fontSize: 12 * vw,
    fontWeight: '300',
    color: '#282B33',
    lineHeight: 18 * vw,
  },
});

export default EventCard;
