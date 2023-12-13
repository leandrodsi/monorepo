import { useEffect, useState } from 'react';
import { NativeEventEmitter, NativeModules } from 'react-native';

const { NetInfoModule } = NativeModules;
const netInfoEventEmitter = new NativeEventEmitter(NetInfoModule);

export const useNetInfo = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const subscription = netInfoEventEmitter.addListener(
      'NetworkStatusChanged',
      ({ isConnected }) => {
        setIsConnected(isConnected);
      }
    );
    NetInfoModule.startMonitoring();

    return () => {
      NetInfoModule.stopMonitoring();
      subscription.remove();
    };
  }, []);

  return {
    isConnected
  };
};
