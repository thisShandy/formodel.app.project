import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
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
import { Ionicons } from '@expo/vector-icons'

import { colors } from '../theme/color'

export default function MessageBar() {

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
                <TextInput style={styles.messageInput} autoCapitalize={'none'} autoCorrect={false} keyboardType='default' placeholder='Задайте ваш вопрос...' />
                <TouchableOpacity style={styles.messageSendButton}>
                    <Ionicons style={{ right: 2, top: 2 }} name="md-paper-plane" size={24} color={colors.SECOND_COLOR} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        backgroundColor: colors.MAIN_COLOR,
        flexDirection: 'row',
        borderRadius: 15,
        elevation: 5,
        marginBottom: 10,
        alignSelf: 'center'
    },
    messageInput: {
        width: '80%',
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: colors.SECOND_COLOR,
        fontSize: 15,
        fontFamily: 'Nunito_400Regular',
    },
    messageSendButton: {
        width: '20%',
        backgroundColor: colors.MAIN_COLOR,
        borderBottomEndRadius: 15,
        borderTopEndRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    }
})