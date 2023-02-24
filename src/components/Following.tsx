import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Divider } from './Divider';


export function Following() {
  return (
    <View className='py-2' >
      <View className=' h-content w-full pb-4  px-6'>
        <View className='py-3'>
          <Text className='font-Inter-600 text-xl'>
            Acompanhe também
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={1}
          className='flex-row h-content px-3 py-2  bg-white-200  rounded-xl  justify-between'>
          <View className='flex-row items-center'>
            <Image
              className='w-7 h-7 '
              source={require("../../assets/app-icons/following.png")}
            />
            <Text className='font-Inter-400 font-bold p-2 pl-4'>
              Assistente de {'\n'}pagamentos
            </Text>

          </View>

          <View className='p-4 justify-center items-center'>
            <Text className='text-white-100 font-Inter-600 bg-purple-100 rounded-md px-1'>

              Novo
            </Text>
          </View>

        </TouchableOpacity>
      </View>

      <Divider />
    </View>
  );
}