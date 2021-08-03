import React from 'react';
import { Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';

import { AppStackRoutes } from './app.stack.routes';
import { MyCars } from '../screens/MyCars';
import { Profile } from '../screens/Profile';

import HomeIcon from '../assets/tab-icons/home.svg';
import CarIcon from '../assets/tab-icons/car.svg';
import UserIcon from '../assets/tab-icons/people.svg';

const { Screen, Navigator } = createBottomTabNavigator();

export function AppTabsRoutes(): JSX.Element {
  const theme = useTheme();

  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.main,
        inactiveTintColor: theme.colors.text_detail,
        showLabel: false,
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 68,
          backgroundColor: theme.colors.background_primary,
        },
        keyboardHidesTabBar: true,
      }}
    >
      <Screen
        options={{
          tabBarIcon: ({ color }) => (
            <HomeIcon height={24} width={24} fill={color} />
          ),
        }}
        name="AppHome"
        component={AppStackRoutes}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => (
            <CarIcon height={24} width={24} fill={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <UserIcon height={24} width={24} fill={color} />
          ),
        }}
      />
    </Navigator>
  );
}
