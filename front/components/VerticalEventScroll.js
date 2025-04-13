import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import EventCard from './EventCard'; // Подключаем компонент карточки события

const { width, height } = Dimensions.get('window');
const vw = width / 390; // Адаптивность по ширине
const vh = height / 844; // Адаптивность по высоте

const VerticalEventScroll = ({ eventsData = [], onGenerate = () => {} }) => {
  // Проверка на наличие данных и предотвращение ошибок, если данные не переданы
  if (!eventsData || eventsData.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noEventsText}>Нет доступных событий</Text>
        <TouchableOpacity style={styles.button} onPress={onGenerate}>
          <Text style={styles.buttonText}>Сгенерировать</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Вертикальный скролл для карточек событий */}
      <ScrollView style={styles.scrollContainer}>
        {eventsData.map((event, index) => (
          <View style={{ marginBottom: 16 * vh }} key={index}>
            <EventCard
              image={event.image}
              title={event.title}
              duration={event.duration}
              places={event.places}
              rating={event.rating}
              style={styles.eventCard}
            />
          </View>
        ))}
      </ScrollView>

      {/* Кнопка внизу экрана */}
      <TouchableOpacity style={styles.button} onPress={onGenerate}>
        <Text style={styles.buttonText}>Сгенерировать</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#F7F7FA',
    paddingHorizontal: 16 * vw,
    paddingTop: 16 * vh,
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100 * vh, // оставляем место для кнопки
  },
  eventCard: {
    marginBottom: 16 * vh,
  },
  button: {
    width: '100%',
    padding: 12 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16 * vw,
    borderWidth: 1 * vw,
    borderColor: '#31C2B1',
    backgroundColor: '#31C2B1',
    position: 'absolute',
    bottom: 16 * vh, // фиксируем кнопку снизу
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16 * vw,
    fontWeight: '400',
  },
  noEventsText: {
    textAlign: 'center',
    color: '#282B33',
    fontFamily: 'Inter',
    fontSize: 18 * vw,
    fontWeight: '500',
    marginTop: 20 * vh,
  },
});

export default VerticalEventScroll;
