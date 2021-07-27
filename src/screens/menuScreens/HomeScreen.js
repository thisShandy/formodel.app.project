import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { colors } from '../../theme/color'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.userContainer}>
                    <Text style={{}}>Добро пожаловать</Text>
                    <Text style={{fontSize: 16, fontWeight: '700'}}>Ник пользователя</Text>
                </View>
                <View style={styles.messengerContainer}>
                    <TouchableOpacity style={styles.messengerButton}>
                        <Feather name="message-circle" size={26} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContainer: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '10%',
        backgroundColor: 'red',
    },
    userContainer: {
        top: 15,
    },
    messengerButton: {
        width: 40,
        height: 40,
        top: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.SECOND_COLOR,
    }
})  