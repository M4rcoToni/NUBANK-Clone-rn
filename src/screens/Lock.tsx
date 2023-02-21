import React, { useEffect } from 'react';
import { View, Image, Alert } from 'react-native';
import { Button } from '../components/Button';
import * as LocalAuthentication from 'expo-local-authentication';


export function Lock() {
  async function handleLocalAutentication() {

    const resultadoAutenticacao = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Toque o sensor de impressão digital para continuar',
    });
    if (resultadoAutenticacao.success) {
      Alert.alert("Autenticado")
    }
  }



  return (
    <View className='flex-auto bg-purple-100  items-center  p-10 justify-center'>

      <View className='flex-auto justify-center'>

        <Image
          className='h-16 w-32'
          source={require('../../assets/logo.png')}
        />
      </View>

      <View className='justify-end'>
        <Button
          onPress={handleLocalAutentication}
          title='Usar senha do celular'
        />
      </View>

    </View >
  );
}