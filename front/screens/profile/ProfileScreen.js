import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import UserProfile from '../../components/UserProfile';
import settings from "../../assets/solar_settings-line-duotone.png"
import SettingsItem from '../../components/SettingsItem';
import coins from "../../assets/coins.png"
import pinmap from "../../assets/pin-map.png"
import BottomNavigator from '../../components/BottomNavigator';


const { width } = Dimensions.get('window');
const vw = width / 390; 

export default function ProfileScreen() {
  return (
    <View style={{height: "100%"}}>
        <UserProfile 
  name="Иван Иванов" 
  points={1200} 
  icon={require('../../assets/Frame 1000000873.png')}
/>

        <View style={{padding: 16 * vw}}>
            <SettingsItem
                image={settings} // Передаем изображение через пропс
                onPress={() => console.log('Navigate to settings')}
                title="Настройки"
            />
            <SettingsItem
                image={coins} // Передаем изображение через пропс
                onPress={() => console.log('Navigate to settings')}
                title="Бонусы и скидки"
            />
            <SettingsItem
                image={pinmap} // Передаем изображение через пропс
                onPress={() => console.log('Navigate to settings')}
                title="Персональный маршрут"
            />
        </View>
        <View style={{height: "48.1%"}}></View>
            <BottomNavigator activeTab="Profile" />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  }
});
