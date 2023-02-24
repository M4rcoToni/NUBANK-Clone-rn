import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface Props {
  isClosed: boolean;
  onPressed: () => void;
}

export function Header({ isClosed, onPressed }: Props) {

  return (
    <View className='h-content bg-purple-100 pl-3 pt-2'>
      <View className='flex-row justify-between mt-10'>
        <View className='h-12 w-12 rounded-full bg-white-200 ml-1 justify-center items-center'>
          <Feather
            name='user'
            size={24}
            color='gray'
          />
        </View>

        <View className='flex-row  gap-3 items-center mr-6'>
          <TouchableOpacity
            onPress={onPressed}
            activeOpacity={1}
          >
            {
              isClosed ?
                <Image
                  className='w-10 h-10'
                  source={require('../../assets/app-icons/eyeopen.png')}
                />
                :
                <Image
                  className='w-10 h-10'
                  source={require('../../assets/app-icons/eyeclose.png')}
                />
            }

          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={1}
          >
            <Image
              className='w-8 h-8'
              source={require('../../assets/app-icons/info.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={1}
          >
            <Image
              className='w-10 h-10'
              source={require('../../assets/app-icons/mail.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className='pl-4  pb-5 pt-6'>
        <Text className='text-white-100 font-medium text-xl'
        >Olá, Marcoo</Text>
      </View>
    </View>
  );
}