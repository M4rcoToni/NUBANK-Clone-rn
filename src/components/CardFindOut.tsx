import React from 'react';
import { View, Image, ImageProps, Text, TouchableOpacity, Button } from 'react-native';

interface Props extends ImageProps {
  title?: string;
  text?: string;
  buttonTitle?: string;
}

export function CardFindOut({ title, text, buttonTitle, ...rest }: Props) {
  return (
    <View className='ml-3 rounded-md bg-white-200'>
      <View>
        <Image
          {...rest}
          className='w-56 h-32 rounded-t-md '
        />
      </View>
      <View className='pt-3 pl-4 '>
        <View>
          <Text className='font-Inter-600 '>
            {title}
          </Text>
        </View>

        <View>
          <Text className='font-Inter-400 text-gray-500 text-xs py-4' style={{ width: 190 }}>
            {text}
          </Text>
        </View>

        <View className='pb-4 pt-1 w-28'>
          <TouchableOpacity className='py-3 px-3 w-full justify-center items-center bg-purple-100 rounded-3xl ' activeOpacity={1}>
            <Text className='font-Inter-600 text-white-100 '>
              {buttonTitle}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}