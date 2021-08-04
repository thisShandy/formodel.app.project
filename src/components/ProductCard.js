import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { 
    useFonts,
    Nunito_200ExtraLight,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light,
    Nunito_300Light_Italic,
    Nunito_400Regular,
    Nunito_400Regular_Italic,
    Nunito_600SemiBold,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black,
    Nunito_900Black_Italic 
} from '@expo-google-fonts/nunito'

import { colors } from '../theme/color'
import AppLoading from 'expo-app-loading'

export default function ProductCard({ type='default', name='Product', cost=10, image={ uri: 'https://img01.flagma.by/photo/pishchevoy-silikon-dlya-form-pentelast-750-211924_big.jpg' } }) {

    let [fontsLoaded] = useFonts({
        Nunito_200ExtraLight,
        Nunito_200ExtraLight_Italic,
        Nunito_300Light,
        Nunito_300Light_Italic,
        Nunito_400Regular,
        Nunito_400Regular_Italic,
        Nunito_600SemiBold,
        Nunito_600SemiBold_Italic,
        Nunito_700Bold,
        Nunito_700Bold_Italic,
        Nunito_800ExtraBold,
        Nunito_800ExtraBold_Italic,
        Nunito_900Black,
        Nunito_900Black_Italic 
    })

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <TouchableOpacity>
                <View style={ type != 'mini' ? styles.container : styles.containerMini }>
                    <Image style={ type != 'mini' ? styles.productImage : styles.productImageMini } source={ image } />
                    <View style={ type != 'mini' ? styles.textContainer : styles.textContainerMini }>
                        <Text numberOfLines={1} style={ type != 'mini' ? styles.textName : styles.textNameMini} >{name}</Text>
                        <Text style={ type != 'mini' ? styles.textCost : styles.textCostMini} >{cost}р</Text>
                    </View>   
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: 175,
        height: 200,
        alignSelf: 'center',
        backgroundColor: colors.BACK_COLOR,
        borderRadius: 25,
        marginHorizontal: 25,
        marginBottom: 20,
        elevation: 5,
    },
    containerMini: {
        width: 160,
        height: 150,
        alignSelf: 'center',
        backgroundColor: colors.BACK_COLOR,
        borderRadius: 20,
        marginHorizontal: 25,
        marginVertical: 10,
        elevation: 5,
    },
    productImage: {
        alignSelf: 'flex-end',
        width: 105,
        height: 105,
        marginRight: 15,
        marginTop: 20,
        borderRadius: 10,
    },
    productImageMini: {
        alignSelf: 'flex-end',
        width: 80,
        height: 80,
        marginRight: 20,
        marginTop: 12,
        borderRadius: 10,
    },
    textContainer: {
        top: '8%',
        left: '8%',
        justifyContent: 'space-around',
    },
    textContainerMini: {
        top: '5%',
        left: '10%',
        justifyContent: 'space-around',
    },
    textName: {
        width: 155,
        fontFamily: 'Nunito_800ExtraBold',
        color: colors.SECOND_COLOR,
        fontSize: 20,
    },
    textNameMini: {
        width: 140,
        fontFamily: 'Nunito_800ExtraBold',
        color: colors.SECOND_COLOR,
        fontSize: 17,
    },
    textCost: {
        fontFamily: 'Nunito_700Bold',
        color: colors.SECOND_COLOR,
        fontSize: 16,
    },
    textCostMini: {
        top: '1.5%',
        right: 1,
        fontFamily: 'Nunito_700Bold',
        color: colors.SECOND_COLOR,
        fontSize: 14,
    }
})