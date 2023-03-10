import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Account } from '../components/Account';
import { Cards } from '../components/Cards';
import { Header } from '../components/Header';
import { Tools } from '../components/Tools';
import { Modes } from '../components/Modes';
import { CreditCard } from '../components/CreditCard';
import { Following } from '../components/Following';
import { Loan } from '../components/Loan';
import { FindOut } from '../components/FindOut';
import { NavBar } from '../components/NavBar';


export function Home() {
  const [isOpen, setIsOpen] = useState(true);

  function handleShowMoney() {
    setIsOpen(prevState => !isOpen)
  }

  return (
    <>
      <ScrollView
        className='flex-1 bg-white-100'
        showsVerticalScrollIndicator={false}

      >
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
        <CreditCard
          isClosed={isOpen}
        />

        <Following />

        <Loan />

        <FindOut />


      </ScrollView >
      <NavBar />
    </>
  );
}