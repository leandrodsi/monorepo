import { CheckItem } from '@components/CheckItem';
import { createTask } from '@repo/api';
import { List as IList } from '@repo/models';
import { cn } from '@repo/utils/index';
import { Keyboard, Mic, Plus, X } from 'lucide-react-native';
import { useState } from 'react';
import {
  LayoutAnimation,
  Pressable,
  Text,
  TextInput,
  View
} from 'react-native';
import Modal from 'react-native-modal';

export const List = ({ data: { id, name, tasks } }: { data: IList }) => {
  const [newTaskName, setNewTaskName] = useState('');
  const [adding, setAdding] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const finishedItems = tasks?.filter(item => item.finished).length;
  const totalItems = tasks?.length || 0;

  const toggleExpand = () => {
    setExpanded(prev => !prev);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const toggleAdding = (isAdding: boolean) => {
    setAdding(isAdding);
    setIsModalVisible(!isAdding);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const handleAddTask = async () => {
    try {
      setIsLoading(true);
      await createTask(id, { name: newTaskName });

      setIsModalVisible(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="bg-white rounded-lg mb-4">
      <Pressable onPress={toggleExpand}>
        <View className="px-4 h-12 flex-row items-center justify-between">
          <Text className="text-lg text-rangoonGreen-700">
            {name}{' '}
            <Text className="text-sm text-rangoonGreen-500">
              ({finishedItems}/{totalItems})
            </Text>
          </Text>
          <View
            className={cn(
              'flex-row px-2 py-1 bg-white rounded-full',
              adding && 'bg-aquamarine-500'
            )}
          >
            {adding ? (
              <View className="flex-row px-2 py-1 bg-aquamarine-500 rounded-full">
                <Pressable onPress={() => toggleAdding(false)}>
                  <Mic
                    size={20}
                    color="#ffffff"
                    style={{ margin: 0, padding: 0 }}
                  />
                </Pressable>
                <Pressable onPress={() => toggleAdding(false)} className="ml-3">
                  <Keyboard size={20} color="#ffffff" />
                </Pressable>
              </View>
            ) : (
              <Pressable onPress={() => toggleAdding(true)}>
                <Plus size={20} className="text-aquamarine-500" />
              </Pressable>
            )}
          </View>
        </View>
      </Pressable>
      {expanded && (
        <View className="px-4 py-2">
          {tasks
            .sort((a, b) =>
              a.finished && !b.finished ? -1 : !a.finished && b.finished ? 1 : 0
            )
            .map(task => (
              <CheckItem key={task.id.toString()} listId={id} data={task} />
            ))}
        </View>
      )}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
      >
        <View className="bg-white px-6 py-5 rounded-lg">
          <View className="flex-row justify-between items-center mb-8">
            <Text className="text-lg">Add item to list:</Text>
            <Pressable onPress={() => setIsModalVisible(false)}>
              <X size={18} className="text-aquamarine-500" />
            </Pressable>
          </View>
          <Text className="mb-2">Add a name to your item list:</Text>
          <TextInput
            className="mb-4 border-2 border-aquamarine-500 rounded-lg px-4 py-2"
            placeholder="Item name"
            onChangeText={setNewTaskName}
          />
          <Pressable
            className="h-10 bg-aquamarine-500 items-center justify-center rounded-lg"
            onPress={handleAddTask}
          >
            <Text className="text-white font-bold text-lg">Add</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};
