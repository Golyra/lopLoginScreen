import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image,  View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Image source={{uri: 'https://lop.natalnet.br/assets/images/logo.png'}} style={styles.logo}></Image>
        <Text style={styles.header}>Faça login na sua conta</Text>
        <View style={styles.limit}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    backgroundColor: '#fff',
    width: '93%',
    height: '93%',
    borderWidth: 3,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    marginTop: '10%',
    borderRadius: 15,
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    height: 200,
    width: 200,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  limit: {
    width: '95%',
    height: '0.3%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  }
});
