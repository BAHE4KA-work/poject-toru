import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import RadioGroup from '../RadioGroup';

const { width } = Dimensions.get('window');
const vw = width / 390;

export default function TravelStyleForm() {
  const [form, setForm] = useState({
    budget: '',
    withKids: '',
    crowdComfort: '',
    likesPhoto: '',
    extremeInterest: '',
    historicAttitude: ''
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Стиль путешествий и комфорта</Text>

      <RadioGroup
        title="Предпочитаемый бюджет"
        options={[
          { label: 'Эконом', value: 'economy' },
          { label: 'Средний', value: 'medium' },
          { label: 'Премиум', value: 'premium' }
        ]}
        onSelect={(val) => handleChange('budget', val)}
      />

      <RadioGroup
        title="Путешествуете ли вы с детьми (до 12 лет)"
        options={[
          { label: 'Да', value: 'yes' },
          { label: 'Нет', value: 'no' },
          { label: 'Иногда', value: 'sometimes' }
        ]}
        onSelect={(val) => handleChange('withKids', val)}
      />

      <RadioGroup
        title="Комфортно ли вам в толпе?"
        options={[
          { label: 'Да', value: 'yes' },
          { label: 'Нейтрально', value: 'neutral' },
          { label: 'Нет', value: 'no' }
        ]}
        onSelect={(val) => handleChange('crowdComfort', val)}
      />

      <RadioGroup
        title="Любите ли фотографироваться?"
        options={[
          { label: 'Да', value: 'yes' },
          { label: 'Нейтрально', value: 'neutral' },
          { label: 'Нет', value: 'no' }
        ]}
        onSelect={(val) => handleChange('likesPhoto', val)}
      />

      <RadioGroup
        title="Интересуют ли экстремальные развлечения?"
        options={[
          { label: 'Да', value: 'yes' },
          { label: 'Иногда', value: 'sometimes' },
          { label: 'Нет', value: 'no' }
        ]}
        onSelect={(val) => handleChange('extremeInterest', val)}
      />

      <RadioGroup
        title="Отношение к историческим местам"
        options={[
          { label: 'Положительное', value: 'positive' },
          { label: 'Нейтральное', value: 'neutral' },
          { label: 'Негативное', value: 'negative' }
        ]}
        onSelect={(val) => handleChange('historicAttitude', val)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 16 * vw,
    paddingTop: 16 * vw,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12 * vw,
    borderRadius: 16 * vw,
    backgroundColor: 'rgba(235, 235, 235, 0.80)',
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: 24 * vw,
    fontWeight: '600',
    letterSpacing: -0.408 * vw,
    marginBottom: 8 * vw
  }
});
