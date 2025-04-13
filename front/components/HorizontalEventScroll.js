import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import EventCard from './EventCard'; // Компонент карточки события

const { width } = Dimensions.get('window');
const vw = width / 390;  // Использование vw для адаптивности

const HorizontalEventScroll = ({ eventsData }) => {
  return (
    <View style={styles.horizontalScrollContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {eventsData.map((event, index) => (
          <EventCard
            key={index}
            image={event.image}
            title={event.title}
            duration={event.duration}
            places={event.places}
            rating={event.rating}
            style={styles.eventCard}  // Применение стилей
          />
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

export default HorizontalEventScroll;
