import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MenuScreens from './MenuScreens'

import CartScreen from '../screens/secondaryScreens/CartScreen'

const Stack = createStackNavigator()

export default function ScreensContainer() {
    return (
        <Stack.Navigator
            headerMode='none'
        >
            <Stack.Screen name='Menu' component={MenuScreens} />
            <Stack.Screen name='Cart' component={CartScreen} />
        </Stack.Navigator>
    )
}
