import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import coinIcon from '../assets/mingcute_coin-fill.png';

const { width } = Dimensions.get('window');
const vw = width / 390; // Адаптивность по ширине

export default function UserProfile({ name = "Николай Ганусов", points = 993, icon }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <View style={styles.avatar}>
          <Image source={icon} style={styles.avatarImage} />
        </View>
        <View>
          <Text style={styles.greeting}>Привет!</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>{points}</Text>
        <View style={styles.pointsIconWrapper}>
            <Image source={coinIcon} style={styles.icon} resizeMode="contain" />
        </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 16 * vw,
    marginTop: "7%"
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: "5%",
  },
  avatar: {
    backgroundColor: '#D8E9E4',
    borderRadius: 32 * vw,
    padding: 4 * vw,
  },
  avatarImage: {
    width: 64 * vw,
    height: 64 * vw,
    borderRadius: 32 * vw,
  },
  greeting: {
    color: '#898989',
    fontSize: 14 * vw,
    fontWeight: '400',
    fontFamily: 'Inter',
    lineHeight: 14 * vw,
    letterSpacing: -0.032 * vw,
  },
  name: {
    color: '#000',
    fontSize: 16 * vw,
    fontWeight: '500',
    fontFamily: 'Inter',
    lineHeight: 16 * vw,
    letterSpacing: -0.037 * vw,
  },
  pointsBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8 * vw,
    backgroundColor: '#FFF',
    borderRadius: 8 * vw,
    borderWidth: 1 * vw,
    borderColor: '#31C2B1',
  },
  pointsText: {
    color: '#000',
    fontSize: 16 * vw,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  coinIcon: {
    width: 24 * vw,
    height: 24 * vw,
    marginLeft: 8 * vw,
  },
  pointsContainer: {
    height: "50%",
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
