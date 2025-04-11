import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Animated
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const vw = screenWidth / 390;

export default function AuthSwitch({ onTabChange }) {
  const [activeTab, setActiveTab] = useState('login');
  const translateX = useRef(new Animated.Value(0)).current;

  const { t, i18n } = useTranslation();

  const handleTabPress = (tab) => {
    const toValue = tab === 'login' ? 0 : 1;
    Animated.timing(translateX, {
      toValue,
      duration: 250,
      useNativeDriver: false
    }).start();

    setActiveTab(tab);
    onTabChange?.(tab);
  };

  // вычисляем ширину таба
  const tabWidth = (screenWidth - 8 * vw - 2 * vw) / 2;

  const interpolateTranslate = translateX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, tabWidth -50 * vw]
  });

  return (
    <View style={styles.wrapper}>
      {/* Анимированная подложка под активным табом */}
      <Animated.View
        style={[
          styles.slider,
          {
            width: tabWidth -35,
            transform: [{ translateX: interpolateTranslate }]
          }
        ]}
      />

      <Pressable style={styles.tabWrapper} onPress={() => handleTabPress('login')}>
        <Text
          style={[
            styles.text,
            activeTab === 'login' ? styles.activeText : styles.inactiveText
          ]}
        >
          {t("auth.login")}
        </Text>
      </Pressable>

      <Pressable style={styles.tabWrapper} onPress={() => handleTabPress('register')}>
        <Text
          style={[
            styles.text,
            activeTab === 'register' ? styles.activeText : styles.inactiveText
          ]}
        >
          {t("auth.register")}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 4 * vw,
    backgroundColor: '#658F47',
    borderRadius: 16 * vw,
    width: '100%',
    justifyContent: 'space-between',
    position: 'relative'
  },
  slider: {
    position: 'absolute',
    top: 4 * vw,
    left: 4 * vw,
    bottom: 4 * vw,
    backgroundColor: '#FFF',
    borderRadius: 12 * vw,
    zIndex: 0
  },
  tabWrapper: {
    flex: 1,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10 * vw,
    paddingHorizontal: 12 * vw,
    borderRadius: 12 * vw
  },
  text: {
    fontSize: 16 * vw,
    fontFamily: 'Inter',
    fontWeight: '400'
  },
  activeText: {
    color: '#658F47'
  },
  inactiveText: {
    color: '#FFF'
  }
});
