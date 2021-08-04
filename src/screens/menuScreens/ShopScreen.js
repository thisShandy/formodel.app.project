import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
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

import CategoryCard from '../../components/CategoryCard'

import { colors } from '../../theme/color'

export default function ShopScreen({ navigation }) {

    const [ categories, setLoadCategories ] = useState([])

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

    async function loadCategories() {
        const snapshot = await Firebase.firestore().collection('categories').get()
        setLoadCategories(snapshot.docs.map(doc => doc.data()))
    }

    useEffect(() => {
        loadCategories()
    }, [])

    if(!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.containerBackgroundImage} source={ require( '../../img/background-image-second.jpg' ) } >
                    <TabBar navigation={ navigation } />
                    <View style={styles.containerContent}>
                        <Text style={styles.titleText}>Категории</Text>
                        <ScrollView showsVerticalScrollIndicator={false} style={styles.containerScroll}>
                            {
                                categories.map((category) => {
                                    return (
                                        <CategoryCard name={category.name} />
                                    )
                                })
                            }
                        </ScrollView>
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
    containerContent: {
        width: '100%',
    },
    containerScroll: {
        width: '100%',
        marginBottom: 165,
    },
    titleText: {
        alignSelf: 'center',
        fontSize: 25,
        fontFamily: 'Nunito_800ExtraBold',
        color: colors.SECOND_COLOR,
        marginVertical: 10,
    }
})