import React from 'react'
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

import MessageBar from '../../components/MessageBar'
import MessageUser from '../../components/MessageUser'

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
                    <TabBar navigation={ navigation } />
                    <View style={styles.chatContainer}>
                        <MessageBar />
                        <ScrollView style={styles.chatContainerScroll}>
                            <MessageUser text='Здраствуйте, можете посказать?' type='user' />
                            <MessageUser text='Добрый день, что именно?' type='admin' />
                            <MessageUser text='Хочу гипс заказать' type='user' />
                            <MessageUser text='Самовывоз или доставка?' type='admin' />
                            <MessageUser text='Самовывоз' type='user' />
                            <MessageUser text='Приезжайте на пункт самовывоза' type='admin' />
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
    chatContainer: {
        flex: 1,
        flexDirection: 'column-reverse'
    },
    chatContainerScroll: {
        flex: 1,
        flexDirection: 'column-reverse'
    }
})