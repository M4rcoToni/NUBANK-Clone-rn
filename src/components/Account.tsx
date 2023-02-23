import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
interface Props {
  isClosed: boolean;
}

export function Account({ isClosed }: Props) {

  return (
    <TouchableOpacity
      className=' h-20 p-5 ml-3 mr-2'
      activeOpacity={1}
    >
      <View className='flex-row justify-between '>

        <Text className='font-medium text-xl'>
          Conta
        </Text>
        <Feather
          name='chevron-right'
          size={22}
        />
      </View>
      {
        isClosed ?
          <Text
            className='pt-3 text-xl font-medium '
          >R$ 0,23</Text>
          :
          <Text
            className='pt-3 text-xl font-medium'
          >••••</Text>
      }

    </TouchableOpacity>
  );
}