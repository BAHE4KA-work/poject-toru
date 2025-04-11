import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import AboutScreen from '../screens/AboutScreen';
import LanguageSelector from '../screens/LanguageSelector';
import MapScreen from '../screens/MapScreen';
import Test from '../screens/Test';
import Test2 from '../screens/Test2';
import AuthScreen from '../screens/AuthScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
        {/* <Stack.Screen name="Test" component={Test} /> */}
        {/* <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Language" component={LanguageSelector} /> */}
        {/* <Stack.Screen name="Test2" component={Test2} /> */}
        <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }}/> 
        {/* <Stack.Screen name="AuthScreen" component={AuthScreen} />  */}
    </Stack.Navigator>
  );
}
