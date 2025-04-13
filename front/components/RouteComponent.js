import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const vw = width / 390;
const vh = height / 844;

const RouteComponent = ({ onPress }) => {
  return (
    <View style={styles.card}>
      {/* Изображение */}
      <Text style={styles.title}>Персонализированный маршрут</Text>

      <Image
        source={require('../assets/Group (1).png')} // Путь к вашей картинке
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Попробовать</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",  // Для адаптивности можно использовать vw (например 346 * vw)
    padding: 16,
    backgroundColor: '#DAEAE6',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#31C2B1',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    width: 222 * vw,
    height: 126 * vw,
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 28,
    color: '#282B33',
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#31C2B1',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default RouteComponent;
