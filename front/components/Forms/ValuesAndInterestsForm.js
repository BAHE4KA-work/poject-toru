import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import InputCustom from '../InputCustom';
import RadioGroup from '../RadioGroup';

const { width } = Dimensions.get('window');
const vw = width / 390;

export default function ValuesAndInterestsForm() {
  const [form, setForm] = useState({
    hobby: '',
    ecology: '',
    science: '',
    religion: ''
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ценности и интересы</Text>

      <InputCustom
        tittle="Хобби и увлечения"
        placeholder="Например теннис или футбол"
        value={form.hobby}
        onChangeText={(text) => handleChange('hobby', text)}
      />

      <RadioGroup
        title="Отношение к экологии"
        options={[
          { label: 'Положительное', value: 'positive' },
          { label: 'Нейтральное', value: 'neutral' },
          { label: 'Негативное', value: 'negative' }
        ]}
        onSelect={(val) => handleChange('ecology', val)}
      />

      <RadioGroup
        title="Отношение к науке"
        options={[
          { label: 'Положительное', value: 'positive' },
          { label: 'Нейтральное', value: 'neutral' },
          { label: 'Негативное', value: 'negative' }
        ]}
        onSelect={(val) => handleChange('science', val)}
      />

      <RadioGroup
        title="Религиозные/духовные предпочтения"
        options={[
          { label: 'Атеизм', value: 'atheism' },
          { label: 'Христианство(Прав)', value: 'orthodox' },
          { label: 'Христианство(Катол)', value: 'catholic' },
          { label: 'Буддизм', value: 'buddhism' },
          { label: 'Ислам', value: 'islam' },
          { label: 'Иудаизм', value: 'judaism' },
          { label: 'Язычество', value: 'paganism' }
        ]}
        onSelect={(val) => handleChange('religion', val)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 16 * vw,
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
