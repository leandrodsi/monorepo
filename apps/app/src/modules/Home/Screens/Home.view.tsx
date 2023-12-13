import { Header } from '@components/Header';
import { List } from '@components/List';
import { cn } from '@repo/utils/index';
import { X } from 'lucide-react-native';
import {
  ActivityIndicator,
  FlatList,
  Platform,
  Pressable,
  Text,
  TextInput,
  View
} from 'react-native';
import Modal from 'react-native-modal';
import { useHomeView } from './Home.viewModel';

export const Home = () => {
  const {
    states: { lists, isLoading, isModalVisible },
    handlers: { handleAddList, setIsModalVisible, setName }
  } = useHomeView();

  return (
    <View className={cn('flex-1 px-6 pt-12', Platform.OS === 'ios' && 'pt-4')}>
      <Header title="My Lists" onPress={() => setIsModalVisible(true)} />
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
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
      >
        <View className="bg-white px-6 py-5 rounded-lg">
          <View className="flex-row justify-between items-center mb-8">
            <Text className="text-lg">Add list:</Text>
            <Pressable onPress={() => setIsModalVisible(false)}>
              <X size={18} className="text-aquamarine-500" />
            </Pressable>
          </View>
          <Text className="mb-2">Add a name to your list:</Text>
          <TextInput
            className="mb-4 border-2 border-aquamarine-500 rounded-lg px-4 py-2"
            placeholder="List name"
            onChangeText={setName}
          />
          <Pressable
            className="h-10 bg-aquamarine-500 items-center justify-center rounded-lg"
            onPress={handleAddList}
          >
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-white font-bold text-lg">Add</Text>
            )}
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};
