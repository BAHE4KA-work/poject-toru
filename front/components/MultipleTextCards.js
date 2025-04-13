import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import TextCard from './TextCard'; // Подключаем компонент TextCard

const { width } = Dimensions.get('window');
const vw = width / 390;

const MultipleTextCards = ({ texts }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {texts.map((text, index) => (
        <TextCard key={index} text1={text.text1} text2={text.text2} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10 * vw,
    padding: 16 * vw,
    height: 100 * vw,
  },
});

export default MultipleTextCards;
