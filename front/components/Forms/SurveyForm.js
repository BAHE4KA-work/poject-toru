import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import InputCustom from '../InputCustom';
import RadioGroup from '../RadioGroup';

const { width } = Dimensions.get('window');
const vw = width / 390;

export default function SurveyForm() {
  const [form, setForm] = useState({
    age: '',
    foodType: '',
    foodPref: '',
    health: '',
    language: '',
    activity: '',
    pets: ''
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Анкета</Text>

      <InputCustom
        placeholder="Например 52"
        tittle="Возраст"
        keyboardType="numeric"
        value={form.age}
        onChangeText={(text) => handleChange('age', text)}
      />

      <InputCustom
        placeholder="Например вегетарианское"
        tittle="Тип питания"
        value={form.foodType}
        onChangeText={(text) => handleChange('foodType', text)}
      />

      <InputCustom
        placeholder="Например уличная еда; кафе"
        tittle="Предпочтения в еде"
        value={form.foodPref}
        onChangeText={(text) => handleChange('foodPref', text)}
      />

      <RadioGroup
        title="Уровень физической активности"
        options={[
          { label: 'Низкий', value: 'low' },
          { label: 'Средний', value: 'medium' },
          { label: 'Высокий', value: 'high' }
        ]}
        onSelect={(val) => handleChange('activity', val)}
      />

      <InputCustom
        placeholder="Например проблемы с сердцем"
        tittle="Ограничения по здоровью"
        value={form.health}
        onChangeText={(text) => handleChange('health', text)}
      />

    <View >
      <RadioGroup
        title="Путешествуете ли с домашними животными"
        options={[
          { label: 'Да', value: 'yes' },
          { label: 'Нет', value: 'no' }
        ]}
      />
    </View>

    <View style={{margingTop: -10}}>
      <InputCustom
        placeholder="Например русский"
        tittle="Язык"
        value={form.language}
        onChangeText={(text) => handleChange('language', text)}
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 16 * vw,
    flexDirection: 'column',
    alignItems: 'center',
    gap:  "16%",
    borderRadius: 16 * vw,
    backgroundColor: 'rgba(235, 235, 235, 0.80)',
    backdropFilter: 'blur(5px)' // Работает только в Web
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: 24 * vw,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: -0.408
  }
});
