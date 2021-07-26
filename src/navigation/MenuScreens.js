import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/menuScreens/HomeScreen'
import ShopScreen from '../screens/menuScreens/ShopScreen'
import ChatScreen from '../screens/menuScreens/ChatScreen'
import ProfileScreen from '../screens/menuScreens/ProfileScreen'

const Menu = createBottomTabNavigator()

export default function MenuScreens() {
    return (
        <Menu.Navigator>
            <Menu.Screen name='Home' component={HomeScreen} />
            <Menu.Screen name='Shop' component={ShopScreen} />
            <Menu.Screen name='Chat' component={ChatScreen} />
            <Menu.Screen name='Profile' component={ProfileScreen} />
        </Menu.Navigator>
    )
}
