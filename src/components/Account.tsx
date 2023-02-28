import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
interface Props {
  isClosed: boolean;
}

export function Account({ isClosed }: Props) {

  return (
    <TouchableOpacity
      className=' h-content p-5 pl-6 '
      activeOpacity={1}
    >
      <View className='flex-row justify-between '>

        <Text className='font-Inter-600 text-xl'>
          Conta
        </Text>
        <Ionicons
          name='chevron-forward'
          size={22}
          color='#5B5B5B'
        />
      </View>
      {
        isClosed ?
          <Text
            className='pt-3 text-xl font-Inter-600 '
          >R$ 0,23</Text>
          :
          <Text
            className='pt-1 text-4xl font-medium h-7'
          >••••</Text>
      }

    </TouchableOpacity>
  );
}