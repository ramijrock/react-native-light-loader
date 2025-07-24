import React from 'react';
import { SafeAreaView } from 'react-native';
import { Loader } from '../src';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Loader size={50} color="red" />
    </SafeAreaView>
  );
}
