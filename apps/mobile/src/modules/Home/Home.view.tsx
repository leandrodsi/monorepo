import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';

export const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <StatusBar style="auto" />

        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </SafeAreaView>
  );
};
