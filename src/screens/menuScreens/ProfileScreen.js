import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'
import TabBar from '../../components/TabBar'
import AppLoading from 'expo-app-loading'
import { 
    useFonts,
    Nunito_200ExtraLight,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light,
    Nunito_300Light_Italic,
    Nunito_400Regular,
    Nunito_400Regular_Italic,
    Nunito_600SemiBold,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black,
    Nunito_900Black_Italic 
} from '@expo-google-fonts/nunito'
import Firebase from '../../firebase/firebase'

import { colors } from '../../theme/color'

export default function ProfileScreen({ navigation }) {

    const [ user, setUser ] = useState({})

    let [fontsLoaded] = useFonts({
        Nunito_200ExtraLight,
        Nunito_200ExtraLight_Italic,
        Nunito_300Light,
        Nunito_300Light_Italic,
        Nunito_400Regular,
        Nunito_400Regular_Italic,
        Nunito_600SemiBold,
        Nunito_600SemiBold_Italic,
        Nunito_700Bold,
        Nunito_700Bold_Italic,
        Nunito_800ExtraBold,
        Nunito_800ExtraBold_Italic,
        Nunito_900Black,
        Nunito_900Black_Italic 
    })

    async function getUser() {
        await Firebase.firestore().collection('users').doc(Firebase.auth().currentUser.uid.toString()).get()
        .then((doc) => {
            if (doc.exists) {
                setUser(
                    {
                        name: doc.data().login,
                        email: doc.data().email,
                        phone: doc.data().phone.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, "$1-$2-$3-$4-$5"),
                    }
                )
                
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        })
    }

    useEffect(() => {
        getUser()
    }, [])
    
    if(!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.containerBackgroundImage} source={ require( '../../img/background-image-second.jpg' ) } >
                    <View style={styles.contentContainer}>

                        <View style={styles.mainContentContainer}>

                            <Image style={styles.logoImage} source={ require( '../../img/white-logo.png')} />

                            <View style={styles.mainInformation}>
                                <Text style={[styles.mainInformationText, {fontFamily: 'Nunito_800ExtraBold', fontSize: 20,}]}>{ user.name }</Text>
                                <Text style={styles.mainInformationText}>{ user.email }</Text>
                                <Text style={styles.mainInformationText}>{ user.phone }</Text>
                            </View>

                        </View>
                        <TouchableOpacity style={styles.changeButton}>
                            <Text style={styles.changeButtonText}>Изменить</Text>
                        </TouchableOpacity>
                        
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerBackgroundImage: {
        flex: 1,
    },
    contentContainer: {
        width: '100%',
        marginTop: 50,
    },
    mainContentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 25,
    },
    logoImage: {
        width: 160,
        height: 160,
    },
    mainInformation: {
        justifyContent: 'center',
    },
    mainInformationText: {
        fontSize: 18,
        fontFamily: 'Nunito_700Bold',
        color: colors.SECOND_COLOR,
    },
    changeButton: {
        width: 100,
        height: 40,
        backgroundColor: colors.SECOND_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: 25,
        marginTop: -15,
        borderRadius: 15,
    },
    changeButtonText: {
        fontSize: 15,
        fontFamily: 'Nunito_700Bold',
        color: colors.TEXT_COLOR,
    }
})