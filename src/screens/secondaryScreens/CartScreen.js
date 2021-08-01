import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
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

import CartItem from '../../components/CartItem'

import { colors } from '../../theme/color'

export default function CardScreen({ navigation }) {

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
            <View style={styles.container}>
                <View style={styles.tabBarContainer}>

                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }} style={styles.backButton}>
                        <Feather name="arrow-left" size={26} color={colors.TEXT_COLOR} />
                    </TouchableOpacity>

                    <Text style={styles.tabBarLabel}>Корзина</Text>

                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CartItem name='Super Mold' />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </ScrollView>
                <View style={styles.totalCost}>
                    <Text style={styles.totalCostText}>200р</Text>
                    <TouchableOpacity style={styles.totalCostButton}>
                        <Text style={styles.totalCostButtonText}>Заказать</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_COLOR,
    },
    tabBarContainer: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    backButton: {
        marginRight: '85%',
        top: 53,
    },
    tabBarLabel: {
        top: 50,
        position: 'absolute',
        color: colors.TEXT_COLOR,
        fontSize: 24,
        fontFamily: 'Nunito_800ExtraBold',
    },
    totalCost: {
        flexDirection: 'row',
        height: 75,
        width: '100%',
        backgroundColor: colors.SECOND_COLOR,
        justifyContent: 'space-between',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        elevation: 5,
    },
    totalCostText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 22,
        color: colors.TEXT_COLOR,
        marginTop: 22,
        marginLeft: 50,
    },
    totalCostButton: {
        width: 180,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 12,
        marginRight: 30, 
        backgroundColor: colors.BACK_COLOR,
    },
    totalCostButtonText: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
        color: colors.SECOND_COLOR,
    },
})