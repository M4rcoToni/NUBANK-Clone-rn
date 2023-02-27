import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Divider } from './Divider';
import { Ionicons } from '@expo/vector-icons';



export function Loan() {
  return (
    <TouchableOpacity
      className=' h-content w-full '
      activeOpacity={1}
    >
      <View className='py-3'>
        <View className='flex-row justify-between  px-6'>
          <Text className='font-Inter-600 text-xl'>
            Empréstimo
          </Text>

          <View className='pr-1'>
            <Ionicons
              name='chevron-forward'
              size={22}
            />
          </View>
        </View>


        <View className='px-6 py-5'>
          <Text className='font-Inter-600 text-gray-500'>
            Educação está em dia.
          </Text>
        </View>
      </View>
      <Divider />
    </TouchableOpacity>
  );
}