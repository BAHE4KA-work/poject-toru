import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions, SafeAreaView, Text } from 'react-native';
import IdealVacationText from '../../components/IdealVacationText';
import BeachGallery from '../../components/BeachGallery';
import BottomNavigator from '../../components/BottomNavigator'; // Предполагаем, что этот компонент уже реализован
import coinIcon from '../../assets/mingcute_coin-fill.png'; // иконка монетки
import TopBar from '../../components/TopBar';
import TextCard from '../../components/TextCard';
import EventCard from '../../components/EventCard';
import HorizontalEventScroll from '../../components/HorizontalEventScroll';
import GameTravelCard from '../../components/GameTravelCard';
import coin from "../../assets/mingcute_coin-fill (1).png"
import GameTravelCardScroll from '../../components/GameTravelCardScroll';
import MapComponent from '../../components/Map/MapComponent';

import { useNavigation } from '@react-navigation/native'; // Импортируем useNavigation
import RouteComponent from '../../components/RouteComponent';


const { height, width } = Dimensions.get('window');
const vw = width / 390;
const vh = height / 844;

export default function HomeScreen() {

    const navigation = useNavigation(); // Получаем объект навигации

  const texts = [
    { text1: "Hello!", text2: "Zdravstvuyte!" },
    { text1: "Good Morning!", text2: "Dobroye utro!" },
    { text1: "How are you?", text2: "Kak dela?" },
    { text1: "Hello!", text2: "Zdravstvuyte!" },
    { text1: "Good Morning!", text2: "Dobroye utro!" },
    { text1: "Hello!", text2: "Zdravstvuyte!" },
    { text1: "Good Morning!", text2: "Dobroye utro!" },
  ];

  const eventsData = [
    {
      image: require('../../assets/Image (9).png'),
      title: "Концерт 'Верь в себя'",
      duration: "1 день",
      places: "4",
      rating: "4.8",
    },
    {
      image: require('../../assets/Image (9).png'),
      title: "Выставка искусств",
      duration: "3 дня",
      places: "5",
      rating: "4.5",
    },
    {
      image: require('../../assets/Image (9).png'),
      title: "Мастер-класс по рисованию",
      duration: "2 дня",
      places: "10",
      rating: "4.9",
    },
    // добавьте другие объекты с карточками
  ];

  const Data = [
    {
      text: "Участвуйте в путешествии с элементами игры — выполняйте задания и получайте кубокоины", // Текст для карточки
      icon: require('../../assets/mingcute_coin-fill (1).png') // Путь к иконке
    },
    {
      text: "Путешествуйте с дополнительными бонусами — больше заданий, больше наград", // Текст для карточки
      icon: require('../../assets/mingcute_coin-fill (1).png') // Путь к иконке
    },
    {
      text: "Зарабатывайте очки за выполнение заданий — становитесь лидером!", // Текст для карточки
      icon: require('../../assets/mingcute_coin-fill (1).png') // Путь к иконке
    },
  ];
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Верхняя часть с контентом прокручивается */}
        <ScrollView
          style={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollInner}
        >
          <TopBar points={993} icon={coinIcon} />
          <IdealVacationText />
          <View style={{ marginTop: "-14%" }}><BeachGallery /></View>

          {/* Первый горизонтальный ScrollView */}
          <View style={styles.horizontalScrollContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {texts.map((text, index) => (
                <TextCard key={index} text1={text.text1} text2={text.text2} />
              ))}
            </ScrollView>
          </View>
          <Text style={{
            color: '#282B33',
            fontFamily: 'Inter',
            fontSize: 24 * vw,  // Адаптивный размер шрифта
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 28 * vw,
            marginBottom: -48 * vw,
            marginTop: -32 * vw,
          }}>Популярные маршруты</Text>
          <HorizontalEventScroll eventsData={eventsData} />
          <RouteComponent
            onPress={() => navigation.navigate("PersonalRoute")}
           />
           <View style={{marginTop: -64 * vw}}><GameTravelCardScroll eventsData={Data}  /></View>
           <MapComponent />
          {/* Добавьте сюда другие элементы, если необходимо */}
        </ScrollView>

        {/* Нижняя навигация — всегда внизу */}
        <BottomNavigator activeTab="Home" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7FA',
  },
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#F7F7FA',
    paddingTop: "7%",
  },
  scrollContent: {
    flex: 1,
  },
  scrollInner: {
    paddingBottom: 750 * vh, // чтобы не перекрывалось нижней навигацией
    paddingHorizontal: 16 * vw,
    paddingTop: 16 * vh,
    alignItems: "center",
    gap: "7%",
  },
  horizontalScrollContainer: {
    width: '100%', // Убедитесь, что контейнер имеет полную ширину
    flexDirection: 'row', // элементы в строку
    flexWrap: 'nowrap', // не переносить элементы на новую строку
    marginBottom: -16 * vh, // Добавьте отступы, если необходимо
    marginTop: -142 * vh, // Добавьте отступы, если необходимо

  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopColor: '#ddd',
    paddingHorizontal: 24 * vw,
  },
});
