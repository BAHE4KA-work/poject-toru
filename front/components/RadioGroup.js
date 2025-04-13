import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');
const vw = width / 390;

import checkIcon from '../assets/check (2).png'; // ✅ иконка галочки для активного состояния

export default function RadioGroup({ title, options = [], onSelect }) {
  const [selected, setSelected] = useState(null);

  const handlePress = (value) => {
    setSelected(value);
    onSelect?.(value);
  };

  return (
    <View style={styles.wrapper}>
      {title && <Text style={styles.title}>{title}</Text>}

      <View style={styles.options}>
        {options.map((opt, index) => {
          const isActive = selected === opt.value;
          return (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handlePress(opt.value)}
            >
              <View style={[styles.circle, isActive && styles.circleActive]}>
                {isActive && <Image source={checkIcon} style={styles.icon} />}
              </View>
              <Text style={styles.label}>{opt.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // paddingHorizontal: 16 * vw,
    paddingBottom: 16 * vw,
    gap: 10 * vw,
    alignSelf: 'stretch'
  },
  title: {
    color: '#767982',
    fontFamily: 'Inter',
    fontSize: 14 * vw,
    fontWeight: '500',
    lineHeight: 20 * vw
  },
  options: {
    flexDirection: 'row',
    justifyContent: "space-between",
    flexWrap: "wrap",
    rowGap: 16 * vw,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8 * vw
  },
  circle: {
    width: 24 * vw,
    height: 24 * vw,
    borderRadius: 16 * vw,
    borderWidth: 1,
    borderColor: '#31C2B1',
    backgroundColor: '#F6F6F9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circleActive: {
    backgroundColor: '#97E0D7'
  },
  icon: {
    width: 14 * vw,
    height: 14 * vw,
    resizeMode: 'contain'
  },
  label: {
    color: '#000',
    fontFamily: 'Raleway',
    fontSize: 16 * vw,
    fontWeight: '500',
    letterSpacing: -0.408
  }
});
