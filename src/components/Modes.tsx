import React from 'react';
import { View, ScrollView } from 'react-native';
import { ListModes } from './ListModes';


export function Modes() {
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 18 }}
        horizontal
      >
        <ListModes
          title=' e proteja mais a sua conta.'
          textPurple='Aitve o Modo Rua '
          textEndPurple={false} />

        <ListModes
          title='Concorra a prêmios com Nubank Vida a partir de R$4/mês.'
          textPurple='Saiba mais!' textEndPurple={true} />

        <ListModes
          title=' e desbloqueie brasões incríveis.'
          textPurple='Convide amigos para o Nubank' textEndPurple={false} />

      </ScrollView>
    </View>
  );
}
