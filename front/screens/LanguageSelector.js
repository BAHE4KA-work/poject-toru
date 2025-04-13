import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'zh', label: '中文' },
];

export default function LanguageSelector({ navigation }) {
  const { i18n } = useTranslation();

  const handleSelect = async (lang) => {
    await i18n.changeLanguage(lang);
    await AsyncStorage.setItem('userLanguage', lang);
    navigation.goBack(); // вернуться назад
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Choose your language</Text>
      {LANGUAGES.map((lang) => (
        <Button
          key={lang.code}
          title={lang.label}
          onPress={() => handleSelect(lang.code)}
        />
      ))}
        <Button title="Перейти к карте" onPress={() => navigation.navigate('Map')} />
    </View>
  );
}
