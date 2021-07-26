import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MenuScreens from './MenuScreens'

import LoginScreen from '../screens/authScreens/LoginScreen'
import RegisterScreen from '../screens/authScreens/RegisterScreen'

const Stack = createStackNavigator()

export default function ScreensContainer() {
    return (
        <Stack.Navigator
            headerMode='none'
        >
            <Stack.Screen name='Menu' component={MenuScreens} />
        </Stack.Navigator>
    )
}
