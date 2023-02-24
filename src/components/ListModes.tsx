import React from 'react';
import { View, Text } from 'react-native';
interface Props {
  title: string;
  textPurple: string;
  textEndPurple: boolean;
}
export function ListModes({ title, textPurple, textEndPurple }: Props) {
  return (
    <View className='px-2 h-content  mt-6 justify-center items-center'>
      <View className='w-auto pb-9 px-7 rounded-xl bg-white-200'>

        {
          !textEndPurple ?

            <Text className='mt-5 text-md mr-6' style={{ width: 220 }}>
              <Text className='text-purple-700'>
                {textPurple}
              </Text>
              {title}
            </Text>
            :
            <Text className='mt-4 text-md mr-6' style={{ width: 220 }}>
              {title}
              <Text className='text-purple-700'>
                {textPurple}
              </Text>

            </Text>
        }
      </View>
    </View>
  );
}
