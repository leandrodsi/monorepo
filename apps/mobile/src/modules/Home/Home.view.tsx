import {
  AddIcon,
  Button,
  ButtonIcon,
  ButtonText,
  VStack
} from '@gluestack-ui/themed';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';

export const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack flex={1}>
        <StatusBar style="auto" />
        <Button
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
        >
          <ButtonText>Add </ButtonText>
          <ButtonIcon as={AddIcon} />
        </Button>
        <Text>Open up App.js to start working on your app!</Text>
      </VStack>
    </SafeAreaView>
  );
};
