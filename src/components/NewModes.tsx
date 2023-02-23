import React from 'react';
import { View, Text } from 'react-native';
interface Props {
  title: string;
  textPurple: string;
}
export function NewModes({ title, textPurple }: Props) {
  return (
    <View className='p-2 h-20  mt-5 justify-center items-center'>
      <View className='w-auto h-20 px-8 rounded-xl bg-white-200'>
        <Text className='mt-4 text-md mr-6' style={{ width: 220 }}>
          {title}

        </Text>

      </View>
    </View>
  );
}