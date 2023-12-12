import { Header } from '@components/Header';
import { List } from '@components/List';
import { findAllLists } from '@repo/api';
import { List as IList } from '@repo/models';
import { X } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import Modal from 'react-native-modal';

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lists, setLists] = useState<IList[]>([]);

  useEffect(() => {
    (async function () {
      const { data } = await findAllLists();

      setLists(data);
    })();

    const socket = new WebSocket('ws://localhost:3333');

    socket.addEventListener('open', () => {
      console.log('CONNECTION OPENED');
    });

    socket.addEventListener('message', e => {
      console.log('Message from server:', e.data);
    });
  }, []);

  return (
    <View className="flex-1 px-6 py-8">
      <Header title="My Lists" onPress={() => setIsVisible(true)} />
      <FlatList
        data={lists}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <List data={item} />}
        ListEmptyComponent={() => (
          <Text className="text-lg px-6">
            You do not have any registered list
          </Text>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          lists.length === 0 && {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }
        }
      />
      <Modal isVisible={isVisible} onBackdropPress={() => setIsVisible(false)}>
        <View className="bg-white px-6 py-5 rounded-lg">
          <View className="flex-row justify-between items-center mb-8">
            <Text className="text-lg">Add list:</Text>
            <Pressable onPress={() => setIsVisible(false)}>
              <X size={18} className="text-aquamarine-500" />
            </Pressable>
          </View>
          <Text className="mb-2">Add a name to your list:</Text>
          <TextInput
            className="mb-4 border-2 border-aquamarine-500 rounded-lg px-4 py-2"
            placeholder="List name"
          />
          <Pressable className="h-10 bg-aquamarine-500 items-center justify-center rounded-lg">
            <Text className="text-white font-bold text-lg">Add</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};
