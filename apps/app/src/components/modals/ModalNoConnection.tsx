import LottieView from 'lottie-react-native';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';

import LottieNoConnection from '../../assets/lottie/no-connection.json';

type ModalNoConnectionProps = {
  isVisible: boolean;
};

export const ModalNoConnection = ({ isVisible }: ModalNoConnectionProps) => {
  return (
    <Modal isVisible={isVisible} style={{ margin: 0 }}>
      <View className="flex-1 bg-white items-center justify-center px-10 gap-6">
        <LottieView
          source={LottieNoConnection}
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
        />
        <Text className="text-2xl text-aquamarine-600">
          No internet connection
        </Text>
        <Text className="text-center text-lg text-rangoonGreen-500">
          You need to connect to the internet to be able to save your lists
        </Text>
      </View>
    </Modal>
  );
};
