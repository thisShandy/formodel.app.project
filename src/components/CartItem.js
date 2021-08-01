import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import AppLoading from 'expo-app-loading'
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

export default function CartItem({ name='Продукция', cost=25, image={ uri: 'https://images.by.prom.st/197156058_w600_h600_197156058.jpg' } }) {

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

    if(!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <TouchableOpacity style={styles.container}>
                <Image style={styles.image} source={ image } />
                <View style={styles.productInfoContainer}>
                    <Text style={styles.productName}>{ name }</Text>
                    <Text style={styles.productCost}>{ cost }р</Text>
                    <View style={styles.productAmount}>
                        <TouchableOpacity style={[styles.productAmountButton, { marginRight: 10 }]}>
                            <Feather name="minus" size={24} color={colors.SECOND_COLOR} />
                        </TouchableOpacity>
                        <Text style={styles.productAmountNumber}>3</Text>
                        <TouchableOpacity style={[styles.productAmountButton, { marginLeft: 10, }]}>
                            <Feather name="plus" size={24} color={colors.SECOND_COLOR} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 140,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        borderRadius: 20,
        marginVertical: 30,
        backgroundColor: colors.BACK_COLOR,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 20,
        marginLeft: 30,
        borderRadius: 10,
    },
    productInfoContainer: {
        marginTop: 20,
        marginRight: 40,
    },
    productName: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 22,
        color: colors.SECOND_COLOR,
    },
    productCost: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 18,
        color: colors.SECOND_COLOR,
    },
    productAmount: {
        marginTop: 10,
        flexDirection: 'row',
    },
    productAmountButton: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba( 255, 255, 255, 0.2)',
        borderRadius: 25,

    },
    productAmountNumber: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 16,
        color: colors.SECOND_COLOR,
        marginTop: 3,
    },
})