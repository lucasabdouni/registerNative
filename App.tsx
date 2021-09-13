import React from 'react';

import { ThemeProvider } from 'styled-components';

import { Dashboard } from './src/screens/Dashboard';
import AppLoading from 'expo-app-loading';

import {
  JosefinSans_400Regular,
  useFonts,
} from '@expo-google-fonts/josefin-sans';

import { Nunito_400Regular } from '@expo-google-fonts/nunito';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import theme from './src/global/theme';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    Nunito_400Regular,
    Poppins_400Regular,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Dashboard />
    </ThemeProvider>
  );
}
