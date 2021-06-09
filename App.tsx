import React from 'react';

import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';

import AppLoading from 'expo-app-loading';

import { Home } from './src/screens/Home';
import { CarDetails } from './src/screens/CarDetails';
import { Scheduling } from './src/screens/Scheduling';
import { SchedulingDetails } from './src/screens/SchedulingDetails';

import theme from './src/styles/theme';
import { ScheduleConfirmation } from './src/screens/ScheduleConfirmation';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <ScheduleConfirmation />
    </ThemeProvider>
  );
}
