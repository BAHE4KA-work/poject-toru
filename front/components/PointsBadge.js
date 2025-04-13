import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import coin from "../assets/mingcute_coin-fill.png"

const { width } = Dimensions.get('window');
const vw = width / 390;

export default function PointsBadge({ points = 10, icon }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>+{points}</Text>
      <View style={styles.iconWrapper}>
        <Image
          source={coin}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4 * vw,
    gap: 2 * vw,
    borderRadius: 4 * vw,
    backgroundColor: '#FFF',

  },
  text: {
    color: '#000',
    fontSize: 16 * vw,
    fontWeight: '700',
    fontFamily: 'Inter',
    lineHeight: 16 * vw
  },

  icon: {
    width: 26 * vw,
    height: 26 * vw
  }
});
