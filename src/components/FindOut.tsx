import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { CardFindOut } from './CardFindOut';


export function FindOut() {
  return (
    <View className='h-content w-full'>
      <View className='py-5 px-6'>
        <Text className='font-Inter-600 text-xl'>
          Descubra mais
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingRight: 30 }}
        className='pl-6  px-3 mb-16'
        horizontal
        showsHorizontalScrollIndicator={false}
      >

        <CardFindOut
          title='Páginas Roxas'
          text='Conheça o trabalho dos nossos clientes empreendedores e fortaleça um ...'
          buttonTitle='Acesse'
          source={require('../../assets/findout-images/paginas-roxas.jpg')}
        />

        <CardFindOut
          title='Seguro de Vida'
          text='Cuide de quem você ama de um jeito simples e que cabe no seu bolso.'
          buttonTitle='Conhecer'
          source={require('../../assets/findout-images/seguro-vida.jpg')}
        />


        <CardFindOut
          title='Indique o Nu para amigos'
          text='Espalhe como é simples estar no controle.'
          buttonTitle='Indicar amigos'
          source={require('../../assets/findout-images/indique.jpg')}
        />


        <CardFindOut
          title='Portabilidade de Salario'
          text='Liberdade para escolher onde receber seu dinheiro.'
          buttonTitle='Conhecer'
          source={require('../../assets/findout-images/portabilidade.jpg')}
        />


        <CardFindOut
          title='WhatsApp'
          text='Pagamentos seguros, rápidos e sem tarifa. A experiência Nubank sem nem...'
          buttonTitle='Quero Conhecer'
          source={require('../../assets/findout-images/whatsapp.jpg')}
        />


        <CardFindOut
          title='Termos de uso'
          text='Explicamos o que diz esse documento do Nubank'
          buttonTitle='Conhecer'
          source={require('../../assets/findout-images/termos.jpg')}
        />

      </ScrollView>
    </View>
  );
}