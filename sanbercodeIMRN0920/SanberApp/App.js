import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Component from'./Latihan/Component/Component';
import YoutubeUi from'./Tugas/Tugas12/App';
import LoginUi from'./Tugas/Tugas13/LoginScreen';
import About from'./Tugas/Tugas13/AboutScreen';

export default function App() {
//const app = () => {
  return (
    <About/>
    //<LoginUi/>
    //<Component/>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//export default app;