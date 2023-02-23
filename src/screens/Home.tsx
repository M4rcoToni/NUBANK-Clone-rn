import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Account } from '../components/Account';
import { Cards } from '../components/Cards';
import { Header } from '../components/Header';
import { Tools } from '../components/Tools';
import { NewModes } from '../components/NewModes';
import { Modes } from '../components/Modes';


export function Home() {
  const [isOpen, setIsOpen] = useState(true);

  function handleShowMoney() {
    setIsOpen(prevState => !isOpen)
  }

  return (
    <View className='flex-1 bg-white-100'>
      <Header
        onPressed={handleShowMoney}
        isClosed={isOpen}
      />
      <Account
        isClosed={isOpen}
      />
      <Tools />

      <Cards />

      <Modes />


      <Text>Home</Text>
    </View >
  );
}