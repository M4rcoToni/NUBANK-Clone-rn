import { StatusBar, ActivityIndicator } from 'react-native';
import { Routes } from './src/routes';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#68259F"
        translucent
      />
      {fontsLoaded ? <Routes /> : <ActivityIndicator />}
    </>
  );
}
