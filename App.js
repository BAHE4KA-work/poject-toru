import React, { useEffect, useState } from 'react';
import './i18n/index';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LanguageSelector from './screens/LanguageSelector';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

import * as Font from 'expo-font';


export default function App() {
  const { i18n, t } = useTranslation();
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);

  const [fontsLoaded] = Font.useFonts({
    'Inter': require('./assets/fonts/Inter_18pt-Regular.ttf'),
  });

  useEffect(() => {
    const loadLanguage = async () => {
      const lang = await AsyncStorage.getItem('userLanguage');
      if (lang) {
        await i18n.changeLanguage(lang);
        setIsLanguageSelected(true);
      }
    };
    loadLanguage();
  }, []);

  const handleLanguageSelect = async (lang) => {
    await i18n.changeLanguage(lang);
    await AsyncStorage.setItem('userLanguage', lang);
    setIsLanguageSelected(true);
  };

  return isLanguageSelected ? (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  ) : (
    <LanguageSelector onSelectLanguage={handleLanguageSelect} />
  );
}
