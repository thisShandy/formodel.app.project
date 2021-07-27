import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreens from '../navigation/HomeScreens'
import AuthScreens from '../navigation/AuthScreens'

export default function MainScreen() {

    const [ isAuth, setIsAuth ] = useState(true)

    return (
        <NavigationContainer>
            {
                isAuth ? <HomeScreens /> : <AuthScreens />
            }
        </NavigationContainer>
    )
}
