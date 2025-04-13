import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import RadioGroup from './RadioGroup';
import CheckboxGroup from './CheckboxGroup';
import CustomButton from './CustomButton';
import checkIcon from '../assets/check (1).png';

const { width } = Dimensions.get('window');
const vw = width / 390;

export default function FilterPanel() {
  return (
    <View style={styles.panel}>
      <View style={styles.dragBar} />

      <Text style={styles.title}>Фильтр</Text>

      <View style={{width: "60%"}}>
        <RadioGroup
            title="Можно с животными"
            options={[
            { label: 'да', value: 'yes' },
            { label: 'нет', value: 'no' },
            ]}
        /> 
      </View>

      <View style={{width: "60%"}}>
        <RadioGroup
            title="Kid-friendly"
            options={[
            { label: 'да', value: 'yes' },
            { label: 'нет', value: 'no' }
            ]}
        />
    </View>

      <RadioGroup
        title="Доступ к интернету"
        options={[
          { label: '1', value: '1' },
          { label: '2', value: '2' },
          { label: '3', value: '3' },
          { label: '4', value: '4' },
          { label: '5', value: '5' }
        ]}
      />

      <CheckboxGroup
        title="Тип места"
        options={[
          { label: 'Развлечение', value: 'entertainment' },
          { label: 'Парк', value: 'park' },
          { label: 'Еда', value: 'food' },
          { label: 'Отели', value: 'hotels' }
        ]}
      />

      <CheckboxGroup
        title="Тип кухни"
        options={[
          { label: 'Итальянская', value: 'italian' },
          { label: 'Азиатская', value: 'asian' },
          { label: 'Французская', value: 'french' },
          { label: 'Бурятская', value: 'buryat' },
          { label: 'Русская', value: 'russian' },
          { label: 'Fast food', value: 'fastfood' }
        ]}
      />

      <CustomButton
        title="Сохранить"
        onPress={() => alert('Сохранено')}
        imageSource={checkIcon}
        showImage={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    width: '100%',
    paddingVertical: 12 * vw,
    paddingHorizontal: 16 * vw,
    borderTopLeftRadius: 16 * vw,
    borderTopRightRadius: 16 * vw,
    backgroundColor: '#F6F6F9',
    gap: 4 * vw,
  },
  dragBar: {
    alignSelf: 'center',
    width: 134 * vw,
    height: 4 * vw,
    borderRadius: 100 * vw,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 24 * vw,
    fontWeight: '600'
  }
});
