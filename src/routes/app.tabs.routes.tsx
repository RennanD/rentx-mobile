import React from 'react';
import { View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppStackRoutes } from './app.stack.routes';
import { MyCars } from '../screens/MyCars';

const { Screen, Navigator } = createBottomTabNavigator();

export function AppTabsRoutes(): JSX.Element {
  return (
    <Navigator>
      <Screen name="AppHome" component={AppStackRoutes} />
      <Screen name="MyCars" component={MyCars} />
      <Screen name="Profile" component={View} />
    </Navigator>
  );
}
