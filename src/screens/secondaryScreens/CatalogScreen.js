import React, { useState, useContext } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { View, Alert, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Image, Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'
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
import { AuthContext } from '../../context/authContext'
import CategoryProductCard from '../../components/CategoryProductCard'

import { colors } from '../../theme/color'

export default function CatalogScreen({ navigation }) {

    const { store } = useContext(AuthContext)
    
    const [ data, setData ] = useState([])
    const [ modal, setModal ] = useState({
        visible: false
    })    

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
        const snapshot = await Firebase.firestore().collection('categories').doc(store.getState().category).collection('products').get()
        setData(snapshot.docs.map(doc => doc.data()))
    }

    useFocusEffect(
        React.useCallback(() => {
            const unsubscribe = loadData()
            
            return () => unsubscribe
        }, [store])
    )

    console.log(data)

    if(!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.tabBarContainer}>

                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }} style={styles.backButton}>
                        <Feather name="arrow-left" size={26} color={colors.TEXT_COLOR} />
                    </TouchableOpacity>

                    <Text style={styles.tabBarLabel}>{ store.getState().categoryName }</Text>

                </View>

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modal.visible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.")
                            setModal({
                                ... modal,
                                visible: false
                            });
                        }}
                        
                    >
                        <View style={styles.modalContainer}>
                            <TouchableOpacity onPress={() => {
                                    setModal({ visible: false })
                                }}
                                style={styles.closeButton}
                            >
                                    <Feather name="x" size={30} color={colors.SECOND_COLOR} />
                            </TouchableOpacity>
                            <Image style={styles.goodsImage} source={ modal.image } />
                            <View style={styles.descriptionContainer}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <Text style={[styles.title, { fontSize: 22 }]}>{ modal.name }</Text>
                                    <Text style={styles.text}>{ modal.description }</Text>
                                    <Text style={styles.title}>Применение</Text>
                                    <Text style={styles.text}>{ modal.ussage }</Text>
                                </ScrollView>
                            </View>
                            <View style={styles.buyContainer}>
                                <Text style={styles.buyText}>{ modal.cost }р/{ modal.value }кг</Text>
                                <TouchableOpacity style={styles.buyButton}>
                                    <Text style={styles.buyButtonText}>Купить</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.buyButton, { width: 45, marginRight: '5%', }]}>
                                    <Feather name="shopping-cart" size={25} color={colors.TEXT_COLOR} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        data.map((product) => {
                            return <CategoryProductCard key={product.key} value={product.value} openProduct={setModal} name={product.name} cost={product.cost} description={product.productDescription} ussage={product.productUssage} image={ {uri: product.image} } />
                        })
                    }
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBarContainer: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    backButton: {
        marginRight: '85%',
        top: 53,
    },
    tabBarLabel: {
        top: 50,
        position: 'absolute',
        color: colors.TEXT_COLOR,
        fontSize: 24,
        fontFamily: 'Nunito_800ExtraBold',
    },
    centeredView: {
        position: 'absolute',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        top: '5%',
        alignSelf: 'center',
        alignItems: 'center',
        width: '90%',
        height: Dimensions.get('window').height*0.9,
        backgroundColor: colors.BACK_COLOR,
        borderRadius: 25,
        elevation: 5,
    },
    closeButton: {
        position: 'absolute',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
        top: 10,
    },
    goodsImage: {
        marginTop: 15,
        marginBottom: 15,
        width: '50%',
        height: '23%',
        borderRadius: 25,
    },
    descriptionContainer: {
        width: '100%',
        height: Dimensions.get('window').height*0.55,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        backgroundColor: colors.SECOND_COLOR,
        paddingHorizontal: 10,
        elevation: 5,
    },
    title: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 18,
        color: colors.TEXT_COLOR,
        alignSelf: 'center',
        marginVertical: 15,
    },
    text: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
        color: colors.TEXT_COLOR,
        marginBottom: 10,
    },
    buyContainer: {
        width: '100%',
        height: Dimensions.get('window').height*0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buyText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 20,
        color: colors.SECOND_COLOR,
        marginLeft: '7%',
    },
    buyButton: {
        width: 120,
        height: 45,
        backgroundColor: colors.SECOND_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    buyButtonText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 17,
        color: colors.TEXT_COLOR,
    },
})