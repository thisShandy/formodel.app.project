import React from 'react'
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

import ProductCard from '../../components/ProductCard'

import { colors } from '../../theme/color'

export default function HomeScreen({ navigation }) {

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
                    <TabBar />
                    <ScrollView style={{ paddingBottom: 25 }} showsHorizontalScrollIndicator={false}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.sloganText}>Материалы для форм</Text>
                        <View style={styles.containerMenu}>
                            <TouchableOpacity style={styles.menuButton}>
                                <Text style={styles.menuButtonText}>Силиконы</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.menuButton,  { borderBottomWidth: 0 }]}>
                                <Text style={[styles.menuButtonText, {color: colors.BACKGROUND_COLOR}]}>Гипс</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.menuButton, { borderBottomWidth: 0 }]}>
                                <Text style={[styles.menuButtonText, {color: colors.BACKGROUND_COLOR}]}>Формы</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                        <View style={styles.productContainer}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <ProductCard name='Super Mold' cost={35} image={ {uri: 'https://crimea-soap.ru/images/cms/thumbs/5ea04cc151ac4cf20679e476db6a55c2f7da87f9/img_7885_auto_auto.jpg'} } />
                                <ProductCard name='Rebound 25' cost={60} image={ {uri: 'https://images.by.prom.st/197156058_w600_h600_197156058.jpg'} } />
                                <ProductCard name='Mold Star 16' cost={75} image={ {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYGnntMG78QB4xZw1gZukd0zE2ZFUU0wRUPg&usqp=CAU'} } />
                                <ProductCard name='Platinum' cost={50} image={ {uri: 'https://lh3.googleusercontent.com/proxy/4R8DxzNn_c5yziwBUnAAiSKMnn9_lliekQSUa6vmTyh2MUjlG0w9z6o1lgdEtkEv1j54uQpyNKtOdGanR4W_W8IEKQXmzuJB3GVSwHcbQOyusjf9cpYr4po0HA'} } />
                            </ScrollView>
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={[styles.sloganText, { color: colors.TEXT_COLOR, fontSize: 23, marginBottom: '0%' }]}>Лучший выбор</Text>
                        </View>
                        <View style={[styles.productContainer, {marginVertical: 25}]}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <ProductCard type='mini' name='Mold Star 16' cost={75} image={ {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYGnntMG78QB4xZw1gZukd0zE2ZFUU0wRUPg&usqp=CAU'} } />
                                <ProductCard type='mini' name='Rebound 25' cost={60} image={ {uri: 'https://images.by.prom.st/197156058_w600_h600_197156058.jpg'} } />
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