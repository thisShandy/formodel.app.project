import React, { useEffect } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Firebase from '../firebase/firebase'

import { AuthContext } from '../context/authContext'
import { rootReducer } from '../redux/rootReducer'
import { initialize } from '../redux/actions'

import HomeScreens from '../navigation/HomeScreens'
import AuthScreens from '../navigation/AuthScreens'

export default function MainScreen() {   

    const store = createStore( rootReducer, false, applyMiddleware(thunk) )

    Firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('logged')
            store.dispatch(initialize(true))
        } else {
            console.log('unlogged')
            store.dispatch(initialize(false))
        }
    })

    const Stack = createStackNavigator()

    return (
        <AuthContext.Provider value={{
            store
        }}>
            <NavigationContainer>
                <Stack.Navigator headerMode='none'>
                    <Stack.Screen name='Home' component={HomeScreens} />
                    <Stack.Screen name='Auth' component={AuthScreens} />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    )
}
