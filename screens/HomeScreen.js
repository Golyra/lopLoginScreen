import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image,  View } from 'react-native';
import Constants from 'expo-constants';
import {FontAwesome5} from '@expo/vector-icons'


export default function HomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <StatusBar style='auto'/>
            <View style={styles.headerBottom}>
                <View style={styles.headerMid}>
                    <View style={styles.headerTop}>
                </View>
            </View>

            </View>

            <View style={styles.card}>

            </View>
            <View style={styles.card}>

            </View>
            <View style={styles.card}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      headerBottom: {
        backgroundColor: '#BECDEB',
        height: '12%',
        width: '100%',
        marginBottom: '3%',
        overflow: 'hidden',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
      },
      headerTop: {
        backgroundColor: '#636363',
        height: '26%',
        borderRadius: 6,
    },
      headerMid: {
        backgroundColor: '#989797',
        height: '90%',
        borderRadius: 6,
      },
      card: {
        backgroundColor: '#fff',
        height: '10%',
        width: '95%',
        borderWidth: 3,
        borderColor: 'rgba(0, 40, 100, 0.12)',
        marginBottom: '1%',
        flexDirection: 'row',
        borderRadius: 5,
    },
    });