import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native'
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

import ProductCard from '../../components/ProductCard'

import { colors } from '../../theme/color'

export default function ShopScreen({ navigation }) {

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

    if(!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.containerBackgroundImage} source={ require( '../../img/background-image-second.jpg' ) } >
                    <View style={styles.containerSearch}>
                        <TextInput style={styles.searchInput} autoCapitalize={'none'} autoCorrect={false} keyboardType='default' placeholder='Что ищете?' />
                        <TouchableOpacity style={styles.buttonSearchTitle}>
                            <Text style={styles.searchTitle}>Поиск</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.searchResultTitle}>Лучшие совпадения</Text>
                        <ScrollView showsVerticalScrollIndicator={false} style={styles.containerScroll}>
                            <ProductCard name='Rebound 25' cost={60} image={ {uri: 'https://images.by.prom.st/197156058_w600_h600_197156058.jpg'} } />
                            <ProductCard name='Mold Star 16' cost={75} image={ {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYGnntMG78QB4xZw1gZukd0zE2ZFUU0wRUPg&usqp=CAU'} } />
                            <ProductCard name='Rebound 25' cost={60} image={ {uri: 'https://images.by.prom.st/197156058_w600_h600_197156058.jpg'} } />
                            <ProductCard name='Mold Star 16' cost={75} image={ {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYGnntMG78QB4xZw1gZukd0zE2ZFUU0wRUPg&usqp=CAU'} } />
                            <ProductCard name='Rebound 25' cost={60} image={ {uri: 'https://images.by.prom.st/197156058_w600_h600_197156058.jpg'} } />
                            <ProductCard name='Mold Star 16' cost={75} image={ {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYGnntMG78QB4xZw1gZukd0zE2ZFUU0wRUPg&usqp=CAU'} } />
                            <ProductCard name='Rebound 25' cost={60} image={ {uri: 'https://images.by.prom.st/197156058_w600_h600_197156058.jpg'} } />
                            <ProductCard name='Mold Star 16' cost={75} image={ {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYGnntMG78QB4xZw1gZukd0zE2ZFUU0wRUPg&usqp=CAU'} } />
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
    containerSearch: {
        marginTop: '18%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonSearchTitle: {
        marginVertical: 10,
        marginRight: 25,
        width: 90,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchTitle: {
        fontSize: 22,
        fontFamily: 'Nunito_800ExtraBold',
        color: colors.SECOND_COLOR,
    },
    searchInput: {
        fontSize: 16,
        fontFamily: 'Nunito_700Bold',
        backgroundColor: colors.SECOND_COLOR,
        width: '60%',
        marginLeft: 25,
        borderRadius: 15,
        paddingHorizontal: 15,
        elevation: 5,
    },
    containerContent: {
        width: '100%',
    },
    searchResultTitle: {
        fontSize: 20,
        fontFamily: 'Nunito_800ExtraBold',
        color: colors.SECOND_COLOR,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    containerScroll: {
        width: '100%',
        marginTop: 10,
        marginBottom: 185,
    },
})