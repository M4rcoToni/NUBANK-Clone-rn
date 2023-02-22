import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
interface Props {
  isClosed: boolean;
}

export function Account({ isClosed }: Props) {
  const [isOpen, setIsOpen] = useState(isClosed);


  console.log("acc", isOpen);


  return (
    <TouchableOpacity
      className=' h-24 p-4'
      activeOpacity={1}
    >
      <View className='flex-row justify-between '>

        <Text className='font-medium text-base'>
          Conta
        </Text>
        <Feather
          name='chevron-right'
          size={22}
        />
      </View>
      {
        isOpen ?
          <Text
            className='pt-3 text-base font-medium'
          >R$ 0,23</Text>
          :
          <Text
            className='pt-3 text-base font-medium'
          >••••</Text>
      }

    </TouchableOpacity>
  );
}