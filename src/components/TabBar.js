import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import { AuthContext } from '../context/authContext'

import { colors } from '../theme/color'

export default function TabBar({ navigation }) {

    const { store } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <View style={styles.containerConten}>

                <Image style={styles.logoImage} source={ require( '../img/white-logo.png') } />

                <View style={styles.containerIcon}>
                
                    <TouchableOpacity onPress={() => { 
                        navigation.navigate('Search')
                    }} style={styles.tabBarButton} >
                        <Ionicons name="search" size={26} color={colors.SECOND_COLOR} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        if (store.getState().isAuth) {
                            navigation.navigate('Cart')
                        } else {
                            navigation.navigate('Auth')
                        }
                    }} style={styles.tabBarButton} >
                        <Feather name="shopping-cart" size={26} color={colors.SECOND_COLOR} />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 110,
    },
    containerConten: {
        top: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerIcon: {
        flexDirection: 'row',
    },
    logoImage: {
        width: 85,
        height: 85,
        left: 5,
        top: -8,
    },
    tabBarButton: {
        top: 11,
        right: 15,
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})