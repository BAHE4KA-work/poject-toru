import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import BottomNavigator from '../components/BottomNavigator';

export default function MainScreen({ navigation }) {
  const { t, i18n } = useTranslation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>{t('welcome')}</Text>
      <Text style={{ marginVertical: 10 }}>{t('settings')}</Text>
      <Text style={{ marginBottom: 20 }}>
        🌐 {t('language_names.' + i18n.language)} ({i18n.language})
      </Text>

      <Button title={t('page.about')} onPress={() => navigation.navigate('About')} />
      <Button
        title="🌐 Сменить язык"
        onPress={() => navigation.navigate('Language')}
      />
      <BottomNavigator activeTab="Home" />
    </View>
  );
}
