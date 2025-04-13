import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');
const vw = width / 390;

export default function IdealVacationText() {
  return (
    <View style={styles.container}>
      {/* Задняя линия */}
      <Image
        source={require('../assets/Vector 258.png')} // зелёная линия (добавь свою)
        style={styles.line}
        resizeMode="contain"
      />

      <View style={styles.textWrapper}>
        <Text style={styles.textAbove}>
          Твой идеальный <Image style={{width: 28 * vw, height: 25 * vw}} source={require("../assets/image-no-bg-preview (carve.photos) 4.png")}></Image> {"\n"} <Text style={{color:"#31C2B1"}}>отдых</Text> уже ждёт тебя
        </Text>
        <Text style={styles.textBelow}>
          в Краснодарском крае
        </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      position: 'relative',
    },
    line: {
      zIndex: 2,
      position: 'absolute',
      width: '110%',
      height: 190* vw,
      top: '-31%',
      left: "-15%",
    },
    textWrapper: {
    },
    textAbove: {
        position: "relative",
        zIndex: 1,
      color: '#282B33',
      fontFamily: 'Inter',
      fontSize: 28 * vw,
      fontWeight: '500',
      lineHeight: 35 * vw,
    },
    textBelow: {
        zIndex: 3,
      color: '#31C2B1',
      fontFamily: 'Inter',
      fontSize: 28 * vw,
      fontWeight: '500',
      fontStyle: 'italic',
      lineHeight: 35 * vw,
      letterSpacing: -1.68,
    }
  });
  