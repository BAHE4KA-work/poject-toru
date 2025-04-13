import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import logo from "../assets/Frame 1000003400.png"

const { width } = Dimensions.get('window');
const vw = width / 390;

const languages = [
  { code: 'ru', label: 'Ru', flag: require('../assets/image (7).png') },
  { code: 'en', label: 'En', flag: require('../assets/image (8).png') },
];

export default function TopBar({ points = 993, icon }) {
  const [activeLang, setActiveLang] = useState('ru');
  const [showDropdown, setShowDropdown] = useState(false);

  const currentLang = languages.find(l => l.code === activeLang);

  return (
    <View style={styles.topBar}>
      <View>
        <TouchableOpacity style={styles.langBtn} onPress={() => setShowDropdown(!showDropdown)}>
          <Image source={currentLang.flag} style={styles.flag} />
          <Text style={styles.langLabel}>{currentLang.label}</Text>
        </TouchableOpacity>
        {showDropdown && (
          <View style={styles.dropdown}>
            {languages.map(lang => (
              lang.code !== activeLang && (
                <TouchableOpacity
                  key={lang.code}
                  style={styles.langBtn}
                  onPress={() => {
                    setActiveLang(lang.code);
                    setShowDropdown(false);
                  }}
                >
                  <Image source={lang.flag} style={styles.flag} />
                  <Text style={styles.langLabel}>{lang.label}</Text>
                </TouchableOpacity>
              )
            ))}
          </View>
        )}
      </View>

      <Image source={logo} style={{width: 100 * vw, height: 26 * vw}}></Image>

      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>{points}</Text>
        <View style={styles.pointsIconWrapper}>
          <Image source={icon} style={styles.icon} resizeMode="contain" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    paddingHorizontal: 16 * vw,
    paddingVertical: 12 * vw,
    backgroundColor: '#F7F7FA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  langBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    gap: 6,
  },
  langLabel: {
    fontSize: 14,
    fontFamily: 'Inter',
    color: '#282B33',
  },
  flag: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  dropdown: {
    marginTop: 4,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  logo: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: '#0FC5B3',
    fontFamily: 'Inter',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    gap: 6,
  },
  pointsText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    fontFamily: 'Inter',
  },
  
  icon: {
    width: 30,
    height: 30,
  },
});
