import React, { useState } from 'react';

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

import { Routes } from './src/routes';

import theme from './src/styles/theme';
import { SplashScreen } from './src/components/SplashScreen';

export default function App(): JSX.Element {
  const [appLoagind, setApploading] = useState(true);

  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  });

  function handleLoadApp() {
    setApploading(false);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      {appLoagind ? <SplashScreen onLoadApp={handleLoadApp} /> : <Routes />}
    </ThemeProvider>
  );
}
