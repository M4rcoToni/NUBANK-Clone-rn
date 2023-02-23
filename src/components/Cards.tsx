import React from 'react';
import { View, Image, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';


export function Cards() {
  return (
    <TouchableOpacity
      className='w-full h-14 mt-3 justify-center items-center'
      activeOpacity={1}

    >
      <View className='w-80 h-14 px-3 bg-white-200  rounded-xl items-center flex-row'>
        <Image
          className='w-8 h-8 '
          source={require("../../assets/app-icons/card.png")}
        />
        <Text className='text-sm font-semibold m-3'>
          Meus Cartões
        </Text>
      </View>
    </TouchableOpacity>
  );
}