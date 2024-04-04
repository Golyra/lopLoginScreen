import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image,  View, Pressable } from 'react-native';
import Constants from 'expo-constants';
import {FontAwesome5} from '@expo/vector-icons'

export default function LoginScreen({ navigation }) {
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.border}>
        <View style={styles.logo}>
          <Image source={{uri: 'https://lop.natalnet.br/assets/images/logo.png'}} style={styles.logo}></Image>
        </View>
        <Text style={styles.forms}>Faça login na sua conta</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.login}>Login</Text>
        </Pressable>        
      </View>
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
    borderColor: 'rgba(0, 40, 100, 0.12)',
    marginTop: '10%',
    borderRadius: 3,
    alignItems: 'center',
  },
  logo: {
    height: '24%',
    width: '100%',
  },
  logo: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 220,
    width: 220,
  },
  forms: {
    fontSize: 20,
    marginBottom: 20, 
    margin: 0,
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#0042BD',
  },
  login: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
