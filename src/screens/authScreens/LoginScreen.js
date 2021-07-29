import React, { useContext } from 'react'
import AppLoading from 'expo-app-loading'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
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

import { AuthContext } from '../../context/authContext'

import { colors } from '../../theme/color'

export default function LoginScreen({ navigation }) {

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

    const { auth } = useContext(AuthContext)

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.container}>
                <Image
                    source={ require('../../img/logo-shadow-69CBF5.png') } 
                    style={styles.logo}
                />
                <TextInput autoCapitalize={'none'} autoCorrect={false} keyboardType='default' style={styles.textInput} placeholder='Логин' />
                <TextInput autoCapitalize={'none'} autoCorrect={false} secureTextEntry={true} keyboardType='default' style={styles.textInput} placeholder='Пароль' />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => {auth(true)}} style={styles.buttonTouch}>
                        <Text style={styles.buttonText}>Войти</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signUp}>
                    <Text style={{alignItems: 'center', fontFamily: 'Nunito_400Regular'}}>
                        Ещё нет аккаунта? 
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Register')
                        }}>
                            <Text style={{fontFamily: 'Nunito_700Bold', top: 3.5, marginLeft: 5, color: colors.MAIN_COLOR, fontWeight: '500'}}>
                                Регистрация
                            </Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.SECOND_COLOR,
    },
    logo: {
        width: '40%',
        height: '25%',
    },
    textInput: {
        width: '50%',
        fontSize: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 15,
        borderBottomColor: colors.BORDER_COLOR,
        borderBottomWidth: 1,
        fontFamily: 'Nunito_400Regular'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonTouch: {
        width: 150,
        height: 45,
        backgroundColor: colors.MAIN_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
        marginHorizontal: 10,
        borderRadius: 100,
        elevation: 5,
    },
    buttonText: {
        color: colors.SECOND_COLOR,
        fontSize: 15,
        fontWeight: '600',
        fontFamily: 'Nunito_700Bold',
    },
    signUp: {
        top: '17%',
        alignItems: 'center',
    }
})