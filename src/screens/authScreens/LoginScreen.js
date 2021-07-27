import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'

import { colors } from '../../theme/color'

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={ require('../../img/new-logo-shadow.png') } 
                style={styles.logo}
            />
            <TextInput autoCapitalize={'none'} autoCorrect={false} keyboardType='default' style={styles.textInput} placeholder='Логин' />
            <TextInput autoCapitalize={'none'} autoCorrect={false} secureTextEntry={true} keyboardType='default' style={styles.textInput} placeholder='Пароль' />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonTouch}>
                    <Text style={styles.buttonText}>Войти</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.signUp}>
                <Text style={{alignItems: 'center'}}>
                    Ещё нет аккаунта? 
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Register')
                    }}>
                        <Text style={{top: 3.5, marginLeft: 5, color: colors.MAIN_COLOR, fontWeight: '500'}}>
                            Регистрация
                        </Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    )
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
        fontWeight: '600'
    },
    signUp: {
        top: '17%',
        alignItems: 'center',
    }
})