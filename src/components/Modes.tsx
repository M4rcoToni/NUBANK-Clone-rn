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
        title='Aitve o Modo Rua e proteja mais a sua conta.'
        textPurple=''
      />
      <NewModes
        title='Aitve o Modo Rua e proteja mais a sua conta.'
        textPurple=''
      />
      <NewModes
        title='Aitve o Modo Rua e proteja mais a sua conta.'
        textPurple=''
      />
    </ScrollView>
  );
}