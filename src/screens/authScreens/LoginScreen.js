import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'

import { colors } from '../../theme/color'

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={ require('../../img/logo-shadow.png') } 
                style={styles.logo}
            />
            <TextInput style={styles.textInput} placeholder='Логин' />
            <TextInput style={styles.textInput} placeholder='Пароль' />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonTouch}>
                    <Text style={styles.buttonText}>Войти</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTouch}>
                    <Text style={styles.buttonText}>Регистрация</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '25%',
        height: '25%',
    },
    textInput: {
        width: '50%',
        fontSize: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 10,
        borderBottomColor: colors.BORDER_COLOR,
        borderBottomWidth: 1,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonTouch: {
        width: 120,
        height: 45,
        backgroundColor: colors.MAIN_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginHorizontal: 20,
        borderRadius: 100,
        elevation: 5,
    },
    buttonText: {
        color: colors.SECOND_COLOR,
    }
})