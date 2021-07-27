import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthContext } from '../context/authContext'

import HomeScreens from '../navigation/HomeScreens'
import AuthScreens from '../navigation/AuthScreens'

export default function MainScreen() {

    const [ isAuth, setIsAuth ] = useState(false)

    const auth = ( bool ) => {
        setIsAuth(bool)
    }

    return (
        <AuthContext.Provider value={{
            auth
        }}>
            <NavigationContainer>
                {
                    isAuth ? <HomeScreens /> : <AuthScreens />
                }
            </NavigationContainer>
        </AuthContext.Provider>
    )
}
