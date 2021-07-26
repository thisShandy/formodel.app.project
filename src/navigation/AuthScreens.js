import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/authScreens/LoginScreen'
import RegisterScreen from '../screens/authScreens/RegisterScreen'

const Stack = createStackNavigator()

export default function AuthScreens() {
    return (
        <Stack.Navigator
            headerMode='none'
        >
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
    )
}
