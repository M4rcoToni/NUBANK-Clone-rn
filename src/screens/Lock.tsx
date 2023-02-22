import React, { useEffect } from 'react';
import { View, Image, Alert } from 'react-native';
import { Button } from '../components/Button';
import * as LocalAuthentication from 'expo-local-authentication';
import { useNavigation } from '@react-navigation/native';


export function Lock() {
  const navigation = useNavigation();

  async function handleLocalAutentication() {

    const resultadoAutenticacao = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Toque o sensor de impressão digital para continuar',
    });
    if (resultadoAutenticacao.success) {
      navigation.navigate("home");
    }
  }
  useEffect(() => {
    handleLocalAutentication()
  }, []);


  return (
    <View className='flex-auto bg-purple-100  items-center  p-10 justify-center'>

      <View className='flex-auto justify-center'>

        <Image
          className='h-12 w-24'
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