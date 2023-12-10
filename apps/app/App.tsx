import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Home } from './src/modules/Home/Home.view';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-rangoonGreen-50">
      <StatusBar style="dark" backgroundColor="#f6f7f6" />
      <Home />
    </SafeAreaView>
  );
}
