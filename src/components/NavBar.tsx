import React from 'react';
import { View } from 'react-native';
import { Divider } from './Divider';
import { Octicons } from '@expo/vector-icons';

export function NavBar() {
  return (
    <View className='z-1 absolute bottom-0 h-14 w-full '
      style={{ backgroundColor: ' rgba(255, 255, 255, 0.9)', }}
    >

      <View className='  h-full w-full'>

        <Divider />

        <Octicons
          name='arrow-switch'
          className='text-purple-100'
          size={22}
        />
      </View>

    </View>
  );
}