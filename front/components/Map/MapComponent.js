import React from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import MapView from 'react-native-maps'; // Импортируем компонент карты
import arrow from "../../assets/arrow-right-short.png"

const { width, height } = Dimensions.get('window');
const vw = width / 390; // Адаптивность по ширине экрана
const vh = height / 844; // Адаптивность по высоте экрана

const MapComponent = () => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: "row", alignItems: "center",  marginTop: -32 * vw,
            marginBottom: 16 * vw,}}>
        <Text style={{
            color: '#282B33',  // Тот же цвет
            fontFamily: 'Inter',  // Шрифт Inter
            fontSize: 24 * vw,  // Адаптируем размер шрифта под ширину экрана
            fontWeight: '500',  // Полужирный
            lineHeight: 28 * vw, 
            marginLeft: 16 * vw,
        }}>Карта </Text>
        <Image style={{width: 28 * vw, height: 28 * vw}} source={arrow}></Image>
        </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 55.7558, // Координаты Москвы (или другие, если необходимо)
          longitude: 37.6176,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={false} // Отключаем отображение текущего местоположения
        followsUserLocation={false} // Отключаем следование за местоположением
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: 390 * vw,
    height: 390 * vw, // Карта займет всю доступную высоту
  },
});

export default MapComponent;
