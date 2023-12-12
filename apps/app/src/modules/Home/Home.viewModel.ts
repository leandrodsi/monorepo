import { createList } from '@repo/api';
import { useState } from 'react';
import { useLists } from 'src/context/ListContext';

export const useHomeView = () => {
  const { lists, updateList } = useLists();
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddList = async () => {
    try {
      setIsLoading(true);
      await createList({ name });

      setIsModalVisible(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    states: {
      lists,
      isModalVisible
    },
    handlers: {
      handleAddList,
      setIsModalVisible,
      setName
    }
  };
};
