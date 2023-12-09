import React from 'react';
import { Text, View } from 'react-native';
import { Home } from './src/modules/Home/Home.view';

export default function App() {
  return (
    <View className="flex-1 bg-aquamarine-500 items-center justify-center">
      <Home />
      <Text className="text-[32px] text-aquamarine-50">Aqui funciona</Text>
    </View>
  );
}
