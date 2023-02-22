import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { Lock } from './src/screens/Lock';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
