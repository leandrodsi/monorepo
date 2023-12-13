import { useEffect, useState } from 'react';
import { NativeEventEmitter, NativeModules } from 'react-native';

const { NetInfoModule } = NativeModules;
const netInfoEventEmitter = new NativeEventEmitter(NetInfoModule);

NetInfoModule.startMonitoring();

export const useNetInfo = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const subscription = netInfoEventEmitter.addListener(
      'NetworkStatusChanged',
      ({ isConnected }) => {
        console.log(
          'Status da conexão de internet: ',
          isConnected ? 'CONECTADO' : 'DESCONECTADO'
        );
        setIsConnected(isConnected);
      }
    );

    return () => {
      NetInfoModule.stopMonitoring();
      subscription.remove();
    };
  }, []);

  return {
    isConnected
  };
};
