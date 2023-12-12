import { Plus } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

type HeaderProps = {
  title: string;
  onPress: () => void;
};

export const Header = ({ title, onPress }: HeaderProps) => {
  return (
    <View className="mb-6 flex-row justify-between items-center">
      <Text className="text-2xl">{title}</Text>
      <Pressable
        className="w-6 h-6 bg-aquamarine-500 rounded-md"
        onPress={onPress}
      >
        <Plus size={24} className="text-aquamarine-50" />
      </Pressable>
    </View>
  );
};
