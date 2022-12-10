import {View, Text} from 'react-native';
import React from 'react';
import {Counter, XBaseProvider, XButton} from 'design-system';

export default function App() {
  return (
    <XBaseProvider>
      <View>
        <Text>App</Text>
        <Counter />
        <XButton onPress={() => console.log('hjoo')}>djfjkfjkfj</XButton>
      </View>
    </XBaseProvider>
  );
}
