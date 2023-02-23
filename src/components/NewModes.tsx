import React from 'react';
import { View, Text } from 'react-native';
interface Props {
  title: string;
  textPurple: string;
  textEndPurple: boolean;
}
export function NewModes({ title, textPurple, textEndPurple }: Props) {
  return (
    <View className='p-2 h-20  mt-5 justify-center items-center'>
      <View className='w-auto h-20 px-8 rounded-xl bg-white-200'>

        {
textEndPurple?
  
  <Text className='mt-4 text-md mr-6' style={{ width: 220 }}>
          
          <Text className='text-purple-200'>
            {textPurple}
          </Text>
          {title}
        </Text>
  :
  <Text className='mt-4 text-md mr-6' style={{ width: 220 }}>
          {title}
          <Text className='text-purple-200'>
            {textPurple}
          </Text>
          
        </Text>
        }
      </View>
    </View>
  );
}
