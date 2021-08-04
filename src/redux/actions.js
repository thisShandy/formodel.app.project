import { useState } from 'react'
import Firebase from '../firebase/firebase'
import { AUTH, INIT } from './types'

export function login( email, password, navigation ) {
    Firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => navigation.navigate('Home'))
    .catch(error => console.log(error))
    
    return { type: AUTH }
}

export function register( email, password, login, phone, navigation ) {
    Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            Firebase.firestore().collection('users')
            .doc(Firebase.auth().currentUser.uid)
            .set({
            email,
            login,
            phone
            })
            navigation.navigate('Home')
        })
        .catch(error => console.log(error))

    return { type: AUTH }
}

export function initialize(payload) {
    return { type: INIT, payload }
}