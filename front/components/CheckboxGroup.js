import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');
const vw = width / 390;

import checkIcon from '../assets/check (2).png'; // иконка галочки

export default function CheckboxGroup({ title, options = [], onChange }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleOption = (value) => {
    const isSelected = selectedItems.includes(value);
    const newSelection = isSelected
      ? selectedItems.filter((item) => item !== value)
      : [...selectedItems, value];

    setSelectedItems(newSelection);
    onChange?.(newSelection);
  };

  return (
    <View style={styles.wrapper}>
      {title && <Text style={styles.title}>{title}</Text>}

      <View style={styles.grid}>
        {options.map((opt, index) => {
          const isChecked = selectedItems.includes(opt.value);
          return (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => toggleOption(opt.value)}
            >
              <View style={[styles.checkbox, isChecked && styles.checked]}>
                {isChecked && <Image source={checkIcon} style={styles.icon} />}
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
    paddingHorizontal: 16 * vw,
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12 * vw
  },
  item: {
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8 * vw,
    marginBottom: 10 * vw
  },
  checkbox: {
    width: 24 * vw,
    height: 24 * vw,
    borderRadius: 6 * vw,
    borderWidth: 1,
    borderColor: '#31C2B1',
    backgroundColor: '#F6F6F9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checked: {
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
