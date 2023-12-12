import { cn } from '@repo/utils/index';
import { Check } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

type CheckItemProps = {
  checked: boolean;
  label: string;
  onPress: () => void;
};

export const CheckItem = ({ checked, label, onPress }: CheckItemProps) => {
  return (
    <View className="mb-2">
      <Pressable className="flex-row gap-2 items-center" onPress={onPress}>
        <View
          className={cn(
            'w-5 h-5 rounded-md border-2 border-aquamarine-500 items-center justify-center',
            checked && 'border-rangoonGreen-400'
          )}
        >
          {checked && <Check size={12} className="text-rangoonGreen-500" />}
        </View>
        <Text
          className={cn(
            'flex-1 text-rangoonGreen-400',
            checked && 'text-rangoonGreen-300'
          )}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
};
