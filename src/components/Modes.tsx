import React from 'react';
import { View, ScrollView } from 'react-native';
import { NewModes } from './NewModes';


export function Modes() {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      <NewModes
        title=' e proteja mais a sua conta.'
        textPurple='Aitve o Modo Rua ' 
        textEndPurple={false} />
      <NewModes
        title='Aitve o Modo Rua e proteja mais a sua conta.'
        textPurple='' textEndPurple={true} />
      <NewModes
        title='Aitve o Modo Rua e proteja mais a sua conta.'
        textPurple='' textEndPurple={false} />
    </ScrollView>
  );
}
