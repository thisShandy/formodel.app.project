import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
import { Feather } from '@expo/vector-icons'

import { colors } from '../theme/color'

export default function MessageBar({ type='user', text }) {

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
            <View style={ type === 'user' ? styles.containerUser : styles.containerAdmin }>
                <Text style={styles.messageText}>{ text }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerUser: {
        width: '50%',
        backgroundColor: colors.SECOND_COLOR,
        flexDirection: 'row',
        borderRadius: 15,
        elevation: 5,
        marginBottom: 10,
        marginHorizontal: 5,
        elevation: 5,
        alignSelf: 'flex-end'
    },
    containerAdmin: {
        width: '50%',
        backgroundColor: colors.SECOND_COLOR,
        flexDirection: 'row',
        borderRadius: 15,
        elevation: 5,
        marginBottom: 10,
        elevation: 5,
        alignSelf: 'flex-start'
    },
    messageText: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        fontSize: 15,
        fontFamily: 'Nunito_400Regular',
        color: colors.TEXT_COLOR,
    }
})