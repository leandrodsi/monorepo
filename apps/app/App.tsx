import { Container } from '@components/Container';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox, SafeAreaView } from 'react-native';
import { ListContextProvider } from 'src/context/ListContext';
import { Home } from './src/modules/Home/Screens/Home.view';

LogBox.ignoreLogs(['new NativeEventEmitter']);

export default function App() {
  return (
    <ListContextProvider>
      <SafeAreaView className="flex-1 bg-rangoonGreen-50">
        <StatusBar style="dark" backgroundColor="#f6f7f6" />
        <Container>
          <Home />
        </Container>
      </SafeAreaView>
    </ListContextProvider>
  );
}
