import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../components/Header';


export function Home() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <View className='flex-1 bg-white-100'>
      <Header
        isClosed={isOpen}
      />
      <Text>Home</Text>
    </View>
  );
}