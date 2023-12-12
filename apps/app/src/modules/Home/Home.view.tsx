import { Header } from '@components/Header';
import { List } from '@components/List';
import { X } from 'lucide-react-native';
import { useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import Modal from 'react-native-modal';

export const Home = () => {
  const [lists, setLists] = useState([
    {
      id: 'a',
      name: 'Regime',
      items: [
        { id: 'a1', name: '1 glass of fruit juice', finished: true },
        { id: 'a2', name: '30g of cheese', finished: true },
        { id: 'a3', name: '125g of yogurt', finished: false },
        { id: 'a4', name: 'Rice, pasta or semolina', finished: false },
        { id: 'a5', name: 'Lentils, chickpeas or beans', finished: false }
      ]
    },
    {
      id: 'b',
      name: 'Grocery List',
      items: [
        { id: 'b1', name: 'Meat', finished: true },
        { id: 'b2', name: 'Bread', finished: false },
        { id: 'b3', name: 'Cheese', finished: false },
        { id: 'b5', name: 'Cheese', finished: false },
        { id: 'b6', name: 'Cheese', finished: false },
        { id: 'b7', name: 'Cheese', finished: false },
        { id: 'b4', name: 'Bacon', finished: true }
      ]
    },
    {
      id: 'c',
      name: 'Project Alpha',
      items: []
    },
    {
      id: 'd',
      name: 'Project Beta',
      items: []
    },
    {
      id: 'e',
      name: 'Project Delta',
      items: []
    }
  ]);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <View className="flex-1 px-6 py-8">
      <Header title="My Lists" onPress={() => setIsVisible(true)} />
      <FlatList
        data={lists}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <List data={item} onChange={setLists} />}
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
