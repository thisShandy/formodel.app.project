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

export default function ProductCard({ name='Product', openProduct, cost=10, value, description, ussage, key, image={ uri: 'https://img01.flagma.by/photo/pishchevoy-silikon-dlya-form-pentelast-750-211924_big.jpg' } }) {

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
            <TouchableOpacity onPress={() => {
                openProduct({
                    visible: true,
                    key,
                    image,
                    cost,
                    name,
                    description,
                    ussage,
                    value,
                })
            }} style={ styles.container }>
                <Image style={ styles.productImage } source={ image } />
                <View style={ styles.textContainer }>
                    <Text numberOfLines={1} style={ styles.textName } >{name}</Text>
                    <Text style={ styles.textCost } >{cost}р</Text>
                </View>   
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 250,
        alignSelf: 'center',
        backgroundColor: colors.BACK_COLOR,
        borderRadius: 25,
        marginHorizontal: 25,
        marginBottom: 50,
        elevation: 5,
    },
    productImage: {
        alignSelf: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 10,
    },
    textContainer: {
        top: '3%',
        left: '8%',
        justifyContent: 'space-around',
    },
    textName: {
        width: 250,
        fontFamily: 'Nunito_800ExtraBold',
        color: colors.SECOND_COLOR,
        fontSize: 24,
    },
    textCost: {
        fontFamily: 'Nunito_700Bold',
        color: colors.SECOND_COLOR,
        fontSize: 20,
    },
})