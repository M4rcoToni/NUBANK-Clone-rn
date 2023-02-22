import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from '../screens/Home';
import { Lock } from '../screens/Lock';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}>
      <Screen
        name='home'
        component={Home}
      />

      <Screen
        name='lock'
        component={Lock}
      />

    </Navigator>
  );
}