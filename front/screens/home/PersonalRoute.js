import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import VerticalEventScroll from '../../components/VerticalEventScroll';

const { width, height } = Dimensions.get('window');

export default function PersonalRoute() {
  const eventsData = [
    {
      image: require('../../assets/Image (9).png'),
      title: "Концерт 'Верь в себя'",
      duration: '1 день',
      places: '4',
      rating: '4.8',
    },
    {
      image: require('../../assets/Image (9).png'),
      title: "Концерт 'Верь в себя'",
      duration: '1 день',
      places: '4',
      rating: '4.8',
    },
    {
        image: require('../../assets/Image (9).png'),
        title: "Концерт 'Верь в себя'",
        duration: '1 день',
        places: '4',
        rating: '4.8',
      },
      {
        image: require('../../assets/Image (9).png'),
        title: "Концерт 'Верь в себя'",
        duration: '1 день',
        places: '4',
        rating: '4.8',
      },
  ];

  const handleGenerate = () => {
    console.log('Generate button pressed!');
    // Логика для генерации маршрута или других действий
  };

  return (
    <View style={styles.background}>
      <VerticalEventScroll eventsData={eventsData} onGenerate={handleGenerate} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    
    alignItems: "center",
  },
});
