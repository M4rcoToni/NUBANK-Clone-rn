import React from 'react';
import { TouchableOpacity, View, Image, Text, } from 'react-native';
import { Divider } from './Divider';
import { Ionicons } from '@expo/vector-icons';
interface Props {
  isClosed: boolean;
}

export function CreditCard({ isClosed }: Props) {
  return (
    <TouchableOpacity
      className=' h-contente pt-6'
      activeOpacity={1}
    >
      <Divider />
      <View className='flex-row justify-between pl-6 pb-4 pt-5'>
        <Text className=' font-Inter-600 text-xl '>
          Cartão de crédito
        </Text>

        <View className='pr-6'>
          <Ionicons
            name='chevron-forward'
            size={22}
          />
        </View>

      </View>

      <View className='px-6  '>
        <Text className=' text-sm  font-Inter-600  text-gray-500'>
          Fatura atual
        </Text>
        {
          isClosed ?
            <Text
              className='mt-2 mb-1 text-lg font-Inter-600 '
            >R$ 500,00</Text>
            :
            <Text
              className=' text-2xl h-6  font-Inter-400'
            >••••</Text>
        }
        <Text
          className=' text-gray-500  font-Inter-600'
        >
          Limite disponível de
          {
            isClosed ?
              <Text
                className=' text-sm  font-Inter-600 text-gray-500 '
              > R$ 100,00</Text>
              :
              <Text
                className='text-2xl  h-6 font-bold font-Inter-400 text-gray-500  '
              > ••••</Text>
          }
        </Text>
        <View className=' items-baseline'>

          <View
            className=' text-gray-500 font-Inter-600 '
          >
            {
              isClosed ?
                <Text
                  className=' text-gray-500 font-Inter-600  mb-6'
                >Limite adicional para boletos:
                  <Text
                    className=' text-sm font-Inter-600 text-purple-100 '
                  > R$ 250,00</Text>
                </Text>

                :
                <Text
                  className=' text-gray-500 font-Inter-600 mb-4'
                >Limite adicional para boletos:
                  <Text
                    className=' font-bold font-Inter-600 text-gray-500 text-lg '
                  > ••••</Text>
                </Text>
            }
          </View>
        </View>
      </View>
      <Divider />

    </TouchableOpacity>
  );
}