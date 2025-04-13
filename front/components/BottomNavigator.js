import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNavigator = ({ activeTab }) => {
  const navigation = useNavigation();

  const handleTabPress = (tab) => {
    if (tab === 'Home') {
      navigation.navigate('Home'); // Переход на экран "Главная"
    } else if (tab === 'Map') {
      navigation.navigate('MapScreen'); // Переход на экран "Карта"
    } else if (tab === 'Profile') {
      navigation.navigate('ProfileScreen'); // Переход на экран "Профиль"
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => handleTabPress('Home')}
      >
        <Ionicons
          name={activeTab === 'Home' ? 'home' : 'home-outline'}
          size={30}
          color={activeTab === 'Home' ? '#31C2B1' : '#000'} // Синий цвет для активной вкладки
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => handleTabPress('Map')}
      >
        <Ionicons
          name={activeTab === 'Map' ? 'map' : 'map-outline'}
          size={30}
          color={activeTab === 'Map' ? '#31C2B1' : '#000'} // Зеленый цвет для активной вкладки карты
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => handleTabPress('Profile')}
      >
        <Ionicons
          name={activeTab === 'Profile' ? 'person' : 'person-outline'}
          size={30}
          color={activeTab === 'Profile' ? '#31C2B1' : '#000'} // Синий цвет для активной вкладки профиля
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "8%",
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  tab: {
    alignItems: 'center',
  },
});

export default BottomNavigator;
