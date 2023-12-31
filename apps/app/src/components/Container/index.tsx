import { ModalNoConnection } from '@components/modals/ModalNoConnection';
import { useNetInfo } from '@hooks/useNetInfo';
import { ReactNode, useEffect } from 'react';
import { View } from 'react-native';
import { io } from 'socket.io-client';
import { useLists } from 'src/context/ListContext';

type ContainerProps = { children: ReactNode };

export const Container = ({ children }: ContainerProps) => {
  const { updateList } = useLists();
  const { isConnected } = useNetInfo();

  useEffect(() => {
    const socket = io('ws://192.168.1.208:3333');

    socket.on('connect', () => console.log('CONNECTED'));
    socket.on('onMessage', message => {
      updateList(message);
    });
  }, []);

  return (
    <View className="flex-1">
      {children}
      <ModalNoConnection isVisible={!isConnected} />
    </View>
  );
};
