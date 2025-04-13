import React, { useEffect, useState } from 'react';
import './i18n/index';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LanguageSelector from './screens/LanguageSelector';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'; // Импортируем SplashScreen

export default function App() {
  const { i18n } = useTranslation();
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Ожидаем, пока шрифты и язык не загрузятся
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Inter': require('./assets/fonts/Inter_18pt-Regular.ttf'),
      });
      setFontsLoaded(true); // После загрузки шрифтов обновляем состояние
    };

    // Убираем экран загрузки
    const loadData = async () => {
      await SplashScreen.preventAutoHideAsync(); // Ожидаем завершения загрузки
      await loadFonts();
      await loadLanguage();
    };

    loadData();

  }, []);

  // Загружаем язык из AsyncStorage, если он был сохранен
  useEffect(() => {
    const loadLanguage = async () => {
      const lang = await AsyncStorage.getItem('userLanguage');
      if (lang) {
        await i18n.changeLanguage(lang); // Меняем язык
        setIsLanguageSelected(true); // Язык был выбран
      }
    };
    loadLanguage();
  }, [i18n]);

  // Обработчик выбора языка
  const handleLanguageSelect = async (lang) => {
    await i18n.changeLanguage(lang); // Меняем язык
    await AsyncStorage.setItem('userLanguage', lang); // Сохраняем выбранный язык
    setIsLanguageSelected(true); // Язык выбран
  };

  // После завершения загрузки шрифтов и данных, скрываем SplashScreen
  useEffect(() => {
    if (fontsLoaded && isLanguageSelected) {
      SplashScreen.hideAsync(); // Прячем экран загрузки
    }
  }, [fontsLoaded, isLanguageSelected]);

  // Пока шрифты или язык не загружены, показываем загрузку
  if (!fontsLoaded || !isLanguageSelected) {
    return null; // Поскольку экран загрузки уже будет скрыт, можно просто вернуть null или ничего не показывать.
  }

  return isLanguageSelected ? (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  ) : (
    <LanguageSelector onSelectLanguage={handleLanguageSelect} />
  );
}
