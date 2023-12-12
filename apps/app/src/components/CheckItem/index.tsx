import { updateTask } from '@repo/api';
import { Task } from '@repo/models';
import { cn } from '@repo/utils/index';
import { Check } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

type CheckItemProps = {
  listId: number;
  data: Task & { listId?: number };
};

export const CheckItem = ({
  listId,
  data: { id, name, finished }
}: CheckItemProps) => {
  const handleToggleFinishedTask = async () => {
    try {
      await updateTask(listId, id, { finished: !finished });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <View className="mb-2">
      <Pressable
        className="flex-row gap-2 items-center"
        onPress={handleToggleFinishedTask}
      >
        <View
          className={cn(
            'w-5 h-5 rounded-md border-2 border-aquamarine-500 items-center justify-center',
            finished && 'border-rangoonGreen-400'
          )}
        >
          {finished && <Check size={12} className="text-rangoonGreen-500" />}
        </View>
        <Text
          className={cn(
            'flex-1 text-rangoonGreen-400',
            finished && 'text-rangoonGreen-300'
          )}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {name}
        </Text>
      </Pressable>
    </View>
  );
};
