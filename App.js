import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Home from './screens/Home';

import { PomodoroProvider } from './context/pomodoroContext';

const customFonts = {
  'ubuntu-md': require('./assets/fonts/Ubuntu-Medium.ttf'),
  'spartanmb-eb': require('./assets/fonts/SpartanMB-Extra-Bold.ttf'),
};

export default function App() {
  const [hasLoaded] = Font.useFonts(customFonts);

  if (!hasLoaded) {
    return <AppLoading />;
  }

  return (
    <PomodoroProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Home />
      </View>
    </PomodoroProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
