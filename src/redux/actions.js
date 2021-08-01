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

export function initialize() {
    let payload 
    Firebase.auth().onAuthStateChanged(function(user) {
        console.log('мы здесь')
        if (user) {
            console.log('тут тру')
            payload = true
        } else {
            console.log('тут фолс')
            payload = false
        }
      })
    dispatch({ type: INIT, payload: payload })
}