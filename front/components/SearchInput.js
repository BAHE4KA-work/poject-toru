import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const vw = screenWidth / 390;

export default function SearchInput({
  placeholder = 'Искать',
  onFilterPress
}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/search.png')}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#767982"
      />
      <TouchableOpacity onPress={onFilterPress}>
        <Image
          source={require('../assets/settings-2.png')}
          style={styles.filterIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 358 * vw,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8 * vw,
    paddingHorizontal: 16 * vw,
    backgroundColor: '#F2F1F0',
    borderRadius: 8 * vw,

    // тень (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 2 * vw, height: 6 * vw },
    shadowOpacity: 0.25,
    shadowRadius: 6 * vw,

    // тень (Android)
    elevation: 5
  },
  icon: {
    width: 20 * vw,
    height: 20 * vw,
    marginRight: 8 * vw,
    tintColor: '#767982'
  },
  input: {
    flex: 1,
    fontSize: 16 * vw,
    fontFamily: 'Inter',
    color: '#767982',
    fontWeight: '400',
    lineHeight: 20 * vw
  },
  filterIcon: {
    width: 20 * vw,
    height: 20 * vw,
    marginLeft: 8 * vw,
    tintColor: '#000'
  }
});
