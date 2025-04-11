import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Image, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const vw = screenWidth / 390;

import starFilled from '../assets/star.png';   // ⭐ жёлтая звезда
import starEmpty from '../assets/star (1).png';     // ⭐ серая звезда

export default function StarRating({ onChange, initial = 0, required = false }) {
  const [rating, setRating] = useState(initial);

  const handlePress = (index) => {
    const newRating = index + 1;
    setRating(newRating);
    onChange?.(newRating);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.stars}>
        {[...Array(5)].map((_, index) => (
          <Pressable key={index} onPress={() => handlePress(index)}>
            <Image
              source={index < rating ? starFilled : starEmpty}
              style={styles.star}
              resizeMode="contain"
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    gap: 4 * vw
  },
  label: {
    fontSize: 16 * vw,
    fontWeight: '600',
    fontFamily: 'Inter',
    color: '#282B33'
  },
  required: {
    color: '#FF0000'
  },
  stars: {
    flexDirection: 'row',
    gap: 4 * vw,
    alignItems: 'center'
  },
  star: {
    width: 28 * vw,
    height: 28 * vw
  }
});
