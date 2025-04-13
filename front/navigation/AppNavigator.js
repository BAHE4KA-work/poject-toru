import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MapScreen from '../screens/MapScreen';
import AuthNavigator from './AuthNavigator';
import Test2 from '../screens/Test2';
import HomeNavigator from './HomeNavigator';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
      <Stack.Navigator>
        {/* <Stack.Screen name="Test2" component={Test2} options={{ headerShown: false }} /> */}
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}
