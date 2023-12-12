import { ReactNode, useEffect } from 'react';
import { View } from 'react-native';
import { io } from 'socket.io-client';
import { useLists } from 'src/context/ListContext';

type ContainerProps = { children: ReactNode };

export const Container = ({ children }: ContainerProps) => {
  const { updateList } = useLists();

  useEffect(() => {
    const socket = io('ws://localhost:3333');

    socket.on('connect', () => console.log('CONNECTED'));
    socket.on('onMessage', message => {
      console.log('MESSAGE: ', message);
      updateList(message);
    });
  }, []);

  return <View className="flex-1">{children}</View>;
};
