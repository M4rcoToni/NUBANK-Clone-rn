import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Lock } from './src/screens/Lock';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Lock />
    </>
  );
}
