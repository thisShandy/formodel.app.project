import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
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

import ProductCard from '../../components/ProductCard'

import { colors } from '../../theme/color'

export default function HomeScreen({ navigation }) {

    const [ pageName, setPageName ] = useState('silicone')
    const [ data, setData ] = useState([])

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

    async function loadData() {
        const snapshot = await Firebase.firestore().collection('categories').doc(pageName).collection('products').get()
        setData(snapshot.docs.map(doc => doc.data()))
    }

    useEffect(() => {
        loadData()
    }, [pageName])

    if(!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.containerBackgroundImage} source={ require( '../../img/background-image-second.jpg' ) } >
                    <TabBar navigation={ navigation }  />
                    <ScrollView style={{ paddingBottom: 25 }} showsHorizontalScrollIndicator={false}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.sloganText}>Материалы для форм</Text>
                        <View style={styles.containerMenu}>
                            <TouchableOpacity onPress={() => {
                                setPageName('silicone')
                            }} style={[styles.menuButton, { borderBottomWidth: pageName === 'silicone' ? 2 : 0 }]}>
                                <Text style={[styles.menuButtonText, { color: pageName === 'silicone' ? colors.SECOND_COLOR : colors.BACKGROUND_COLOR }]}>Силиконы</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setPageName('gips')
                            }} style={[styles.menuButton,  { borderBottomWidth: pageName === 'gips' ? 2 : 0 }]}>
                                <Text style={[styles.menuButtonText, { color: pageName === 'gips' ? colors.SECOND_COLOR : colors.BACKGROUND_COLOR }]}>Гипс</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setPageName('forms')
                            }} style={[styles.menuButton, { borderBottomWidth: pageName === 'forms' ? 2 : 0 }]}>
                                <Text style={[styles.menuButtonText, { color: pageName === 'forms' ? colors.SECOND_COLOR : colors.BACKGROUND_COLOR }]}>Формы</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                        <View style={styles.productContainer}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {
                                    data.map((product) => {
                                        return <ProductCard key={product.key} name={product.name} cost={product.cost} image={ {uri: product.image} } />
                                    })
                                }
                            </ScrollView>
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={[styles.sloganText, { color: colors.TEXT_COLOR, fontSize: 23, marginBottom: '0%' }]}>Лучший выбор</Text>
                        </View>
                        <View style={[styles.productContainer, {marginVertical: 25}]}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {
                                    data.filter((product) => product.best === true).map((product) => {
                                        return <ProductCard type='mini' key={product.key} name={product.name} cost={product.cost} image={ {uri: product.image} } />
                                    })
                                }
                            </ScrollView>
                        </View>
                    </ScrollView>
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
        width: '85%',
        alignSelf: 'center',
    },
    sloganText: {
        marginTop: '2%',
        marginBottom: '5%',
        color: colors.SECOND_COLOR,
        fontSize: 25,
        fontFamily: 'Nunito_800ExtraBold',
    },
    containerMenu: {
        flexDirection: 'row',
    },
    menuButton: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderBottomColor: colors.SECOND_COLOR,
        borderBottomWidth: 2,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
    },
    menuButtonText: {
        color: colors.SECOND_COLOR,
        fontSize: 17,
        fontFamily: 'Nunito_700Bold',
    },
    productContainer: {
        marginVertical: 20,
    }
})