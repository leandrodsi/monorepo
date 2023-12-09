import { Title } from '@components/Title';
import { Text, View } from 'react-native';

export const Home = () => {
  return (
    <View className="w-10 h-10 bg-aquamarine-50">
      <Title />
      <Text className="text-aquamarine-500 text-xl">HOME PAGE</Text>
    </View>
  );
};
