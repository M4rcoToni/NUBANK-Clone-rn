import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';


export function Tools() {
  return (
    <View className='h-content w-full justify-center'>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 10 }}
        horizontal
      >
        <View className='ml-6 justify-center items-center'>
          <View className='h-20 w-20 rounded-full bg-white-200 items-center justify-center mx-1'>
            <Image
              className='w-9 h-9 ml-1'
              source={require("../../assets/app-icons/pix.png")}
            />
          </View>
          <Text className='mt-2 text-xs font-semibold' >Área Pix</Text>
        </View>

        <View className='justify-center items-center'>
          <View className='h-20 w-20 rounded-full bg-white-200 items-center justify-center mx-1'>
            <Image
              className='w-9 h-9'
              source={require("../../assets/app-icons/barcode.png")}
            />
          </View>
          <Text className='mt-2 text-xs font-semibold' >Pagar</Text>
        </View>

        <View className='justify-center items-center'>
          <View className='h-20 w-20 rounded-full bg-white-200 items-center justify-center mx-1'>
            <Image
              className='w-9 h-9 ml-1'
              source={require("../../assets/app-icons/transfer.png")}
            />
          </View>
          <Text className='mt-2 text-xs font-semibold' >Transferir</Text>
        </View>

        <View className='justify-center items-center pt-4'>
          <View className='h-20 w-20 rounded-full bg-white-200 items-center justify-center mx-1'>
            <Image
              className='w-9 h-9 '
              source={require("../../assets/app-icons/cel.png")}
            />
          </View>
          <Text className='mt-2 text-xs font-semibold' >Recarga de{'\n'}    celular</Text>
        </View>

        <View className='justify-center items-center'>
          <View className='h-20 w-20 rounded-full bg-white-200 items-center justify-center mx-1'>
            <Image
              className='w-9 h-9 ml-1'
              source={require("../../assets/app-icons/dep.png")}
            />
          </View>
          <Text className='mt-2 text-xs font-semibold' >Depositar</Text>
        </View>

        <View className='justify-center items-center pt-4'>
          <View className='h-20 w-20 rounded-full bg-white-200 items-center justify-center mx-1'>
            <Image
              className='w-9 h-9 '
              source={require("../../assets/app-icons/tran-inter.png")}
            />
          </View>
          <Text className='mt-2 text-xs font-semibold' >Transferir{'\n'} Internac.</Text>
        </View>

        <View className='justify-center items-center'>
          <View className='h-20 w-20 rounded-full bg-white-200 items-center justify-center mx-1'>
            <Image
              className='w-9 h-9 '
              source={require("../../assets/app-icons/cobrar.png")}
            />
          </View>
          <Text className='mt-2 text-xs font-semibold' >Cobrar</Text>
        </View>

        <View className='justify-center items-center'>
          <View className='h-20 w-20 rounded-full bg-white-200 items-center justify-center mx-1'>
            <Image
              className='w-10 h-10 '
              source={require("../../assets/app-icons/donate.png")}
            />
          </View>
          <Text className='mt-2 text-xs font-semibold' >Doação</Text>
        </View>

        <View className='justify-center items-center'>
          <View className='h-20 w-20 rounded-full bg-white-200 items-center justify-center mx-1'>
            <Image
              className='w-8 h-8 '
              source={require("../../assets/app-icons/invest.png")}
            />
          </View>
          <Text className='mt-2 text-xs font-semibold' >Investir</Text>
        </View>

        <View className='mr-8 justify-center items-center'>
          <View className='h-20 w-20 rounded-full bg-white-200 items-center justify-center mx-1'>
            <Image
              className='w-8 h-8 '
              source={require("../../assets/app-icons/guard.png")}
            />
          </View>
          <Text className='mt-2 text-xs font-semibold' >Caixinhas</Text>
        </View>


      </ScrollView>



    </View>
  );
}