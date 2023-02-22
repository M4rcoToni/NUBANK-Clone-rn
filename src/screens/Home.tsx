import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Account } from '../components/Account';
import { Header } from '../components/Header';


export function Home() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log("Home", isOpen);
  }, [isOpen]);
  return (
    <View className='flex-1 bg-white-100'>
      <Header
        handleShowMoney={() => setIsOpen(prevState => !isOpen)}
        isClosed
      />
      <Account
        isClosed={isOpen}
      />
      <Text>Home</Text>
    </View>
  );
}