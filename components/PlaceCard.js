import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import PlaceButton from './CustomButton';
import arrow from '../assets/arrow-down-right.png';
import placeholderImage from '../assets/image 1.png'; // на случай если img_url пустой

const { width: screenWidth } = Dimensions.get('window');
const vw = screenWidth / 390;

export default function PlaceCard({ data, onPress }) {
  if (!data || data.length === 0) {
    return <Text>Нет данных для отображения</Text>;
  }

  const place = data[0]; // Берём первую запись из массива

  return (
    <View style={styles.card}>
      <Image
        source={place.img_url && place.img_url !== 'string' ? { uri: place.img_url } : placeholderImage}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.title}>{place.label}</Text>
        <Text style={styles.address} numberOfLines={2} ellipsizeMode="tail">
          Адрес: {place.address}
        </Text>

        <View style={styles.buttonWrapper}>
          <PlaceButton
            title="Я тут был"
            imageSource={arrow}
            onPress={onPress ? () => onPress(place) : () => alert(`Вы отметили посещение: ${place.label}`)}
            showImage={true}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#EBEBEB',
    borderRadius: 16 * vw,
    padding: 8 * vw,
    gap: 8 * vw,
    alignItems: 'center',
    width: '100%'
  },
  image: {
    width: 167 * vw, // 42.8% от 390
    height: 140 * vw,
    borderRadius: 12 * vw,
    resizeMode: 'cover'
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 8 * vw
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 20 * vw,
    fontWeight: '600',
    color: '#000'
  },
  address: {
    fontFamily: 'Inter',
    fontSize: 14 * vw,
    fontWeight: '500',
    color: '#000',
    marginTop: 4 * vw
  },
  hours: {
    fontFamily: 'Inter',
    fontSize: 14 * vw,
    fontWeight: '400',
    color: '#767982',
    marginTop: 2 * vw
  },
  buttonWrapper: {
    marginTop: 8 * vw
  }
});
