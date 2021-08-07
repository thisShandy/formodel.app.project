import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
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
import { register } from '../../redux/actions'

import { AuthContext } from '../../context/authContext'

import { colors } from '../../theme/color'
import AppLoading from 'expo-app-loading'

export default function LoginScreen({ navigation }) {

    const [ data, setData ] = useState({
        email: '',
        password: '',
        login: '',
        phone: ''
    })

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

    const { store } = useContext(AuthContext)

    if (!fontsLoaded) {
        return <AppLoading />
    }
    else {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }} style={styles.backButton}>
                    <Feather name="arrow-left" size={26} color={colors.TEXT_COLOR} />
                </TouchableOpacity>
                <Image
                    source={ require('../../img/logo-shadow-69CBF5.png') } 
                    style={styles.logo}
                />
                <TextInput onChangeText={(value) => {
                    setData({
                        ... data,
                        login: value,
                    })
                }} autoCapitalize={'none'} autoCorrect={false} keyboardType='default' style={styles.textInput} placeholder='Логин' />
                <TextInput onChangeText={(value) => {
                    setData({
                        ... data,
                        email: value,
                    })
                }} autoCapitalize={'none'} autoCorrect={false} keyboardType='email-address' style={styles.textInput} placeholder='Email' />
                <TextInput onChangeText={(value) => {
                    setData({
                        ... data,
                        phone: value,
                    })
                }} autoCapitalize={'none'} autoCorrect={false} keyboardType='phone-pad' style={styles.textInput} placeholder='Телефон' />
                <TextInput onChangeText={(value) => {
                    setData({
                        ... data,
                        password: value,
                    })
                }} autoCapitalize={'none'} autoCorrect={false} secureTextEntry={true} keyboardType='default' style={styles.textInput} placeholder='Пароль' />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => {
                        store.dispatch(register(data.email, data.password, data.login, data.phone, navigation))
                    }} style={styles.buttonTouch}>
                        <Text style={styles.buttonText}>Регистрация</Text>
                    </TouchableOpacity>
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
        fontFamily: 'Nunito_700Bold',
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        width: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.SECOND_COLOR,
    }
})