import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreens from '../navigation/HomeScreens'
import AuthScreens from '../navigation/AuthScreens'

const Stack = createStackNavigator()

export default function MainScreen() {

    const [ isAuth, setIsAuth ] = useState(false)

    return (
        <NavigationContainer>
            {
                isAuth ? <HomeScreens /> : <AuthScreens />
            }
        </NavigationContainer>
    )
}
