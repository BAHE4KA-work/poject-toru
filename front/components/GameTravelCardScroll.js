import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import EventCard from './EventCard'; // Компонент карточки события
import GameTravelCard from './GameTravelCard';

const { width } = Dimensions.get('window');
const vw = width / 390;  // Использование vw для адаптивности

const GameTravelCardScroll = ({ eventsData }) => {
  return (
    <View style={styles.horizontalScrollContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {eventsData.map((event, index) => (
          <View style={{marginRight: 8 * vw}}><GameTravelCard
            key={index}
            text={event.text}
            icon={event.icon}
          /> </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalScrollContainer: {
    width: '100%', // Убедитесь, что контейнер имеет полную ширину
    flexDirection: 'row', // элементы в строку
    flexWrap: 'nowrap', // не переносить элементы на новую строку
  },
  eventCard: {
    marginRight: 16 * vw, // Отступ между карточками (можно регулировать по желанию)
  }
});

export default GameTravelCardScroll;
