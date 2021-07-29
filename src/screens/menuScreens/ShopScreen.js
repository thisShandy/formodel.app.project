import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import AppLoading from 'expo-app-loading'
import { 
    useFonts, 
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic 
} from '@expo-google-fonts/roboto'
import { Feather } from '@expo/vector-icons'

import ProductCard from '../../components/ProductCard'

import { colors } from '../../theme/color'

export default function ShopScreen() {

    let [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_100Thin_Italic,
        Roboto_300Light,
        Roboto_300Light_Italic,
        Roboto_400Regular,
        Roboto_400Regular_Italic,
        Roboto_500Medium,
        Roboto_500Medium_Italic,
        Roboto_700Bold,
        Roboto_700Bold_Italic,
        Roboto_900Black,
        Roboto_900Black_Italic 
    })

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <Image style={styles.logoImage} source={ require( '../../img/white-logo.png' ) } />
                    <View style={styles.messengerContainer}>
                        <TouchableOpacity style={styles.messengerButton}>
                            <Feather name="message-circle" size={26} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <ScrollView style={styles.scrollContainer} >
                        <ProductCard />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.SECOND_COLOR,
    },
    profileContainer: {
        width: '100%',
        height: '17%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '10%',
        backgroundColor: colors.MAIN_COLOR,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        elevation: 5,
    },
    userContainer: {
        top: 12,
    },
    messengerButton: {
        width: 40,
        height: 40,
        top: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.SECOND_COLOR,
        elevation: 5,
    },
    logoImage: {
        right: 15,
        top: 11,
        width: 90,
        height: 90,
    },
    contentContainer: {
        width: '100%',
        paddingVertical: 25,
    },
    scrollContainer: {
        width: '100%',
    }
})  