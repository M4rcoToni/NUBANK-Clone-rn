import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;

}

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className='h-14 w-80 rounded-full bg-white-100 items-center justify-center'
      {...rest}
    >
      <Text
        className='font-semibold'
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}