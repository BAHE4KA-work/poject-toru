import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import Auth from '../components/auth/Auth';


const { width, height } = Dimensions.get('window');

export default function AuthScreen() {
  return (
    <ImageBackground
      source={require('../assets/sign up rus.png')} // путь к твоей фоновой картинке
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Auth />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  }
});
