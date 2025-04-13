import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';
import SurveyScreen from '../screens/forms/SurveyScreen';
import TravelStyleScreen from '../screens/forms/TravelScreen';
import ValuesAndInterestsScreen from '../screens/forms/ValuesAndInterestsScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="AuthScreen" component={AuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SurveyScreen" component={SurveyScreen} />
        <Stack.Screen name="TravelStyleScreen" component={TravelStyleScreen} />
        <Stack.Screen name="ValuesAndInterestsScreen" component={ValuesAndInterestsScreen} />
    </Stack.Navigator>
  );
}
