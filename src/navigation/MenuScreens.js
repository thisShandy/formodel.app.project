import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'

import { colors } from '../theme/color'

import HomeScreen from '../screens/menuScreens/HomeScreen'
import ShopScreen from '../screens/menuScreens/ShopScreen'
import SearchScreen from '../screens/menuScreens/SearchScreen'
import ChatScreen from '../screens/menuScreens/ChatScreen'
import ProfileScreen from '../screens/menuScreens/ProfileScreen'

const Menu = createBottomTabNavigator()

export default function MenuScreens() {
    return (
        <Menu.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    width: '100%',
                    borderTopWidth: 0,
                    height: '10%',
                    elevation: 0,
                    backgroundColor: colors.SECOND_COLOR
                }
            }}
        >
            <Menu.Screen 
                name='Home' 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            position: 'absolute',
                            borderRadius: 10,
                            backgroundColor: focused ? colors.MAIN_COLOR : colors.SECOND_COLOR,
                            top: '15%',
                            width: 45,
                            height: 45,
                            alignItems: 'center',
                            justifyContent: 'center',
                            elevation: focused ? 2 : 0,
                        }}>
                            <Feather name="home" size={26} color={ focused ? colors.SECOND_COLOR : colors.ICON_COLOR} />
                        </View>
                    )
                }}
            />
            <Menu.Screen 
                name='Shop' 
                component={ShopScreen} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            position: 'absolute',
                            borderRadius: 10,
                            backgroundColor: focused ? colors.MAIN_COLOR : colors.SECOND_COLOR,
                            top: '15%',
                            width: 45,
                            height: 45,
                            alignItems: 'center',
                            justifyContent: 'center',
                            elevation: focused ? 2 : 0,
                        }}>
                            <Feather name="shopping-bag" size={26} color={ focused ? colors.SECOND_COLOR : colors.ICON_COLOR} />
                        </View>
                    )
                }}
            />
            <Menu.Screen 
                name='Search' 
                component={SearchScreen} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            position: 'absolute',
                            borderRadius: 10,
                            backgroundColor: focused ? colors.MAIN_COLOR : colors.SECOND_COLOR,
                            top: '15%',
                            width: 45,
                            height: 45,
                            alignItems: 'center',
                            justifyContent: 'center',
                            elevation: focused ? 2 : 0,
                        }}>
                            <Ionicons name="search" size={26} color={ focused ? colors.SECOND_COLOR : colors.ICON_COLOR} />
                        </View>
                    )
                }}
            />
            <Menu.Screen 
                name='Chat' 
                component={ChatScreen} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            position: 'absolute',
                            borderRadius: 10,
                            backgroundColor: focused ? colors.MAIN_COLOR : colors.SECOND_COLOR,
                            top: '15%',
                            width: 45,
                            height: 45,
                            alignItems: 'center',
                            justifyContent: 'center',
                            elevation: focused ? 2 : 0,
                        }}>
                            <Feather name="message-square" size={26} color={ focused ? colors.SECOND_COLOR : colors.ICON_COLOR} />
                        </View>
                    )
                }}
            />
            <Menu.Screen 
                name='Profile' 
                component={ProfileScreen} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            position: 'absolute',
                            borderRadius: 10,
                            backgroundColor: focused ? colors.MAIN_COLOR : colors.SECOND_COLOR,
                            top: '15%',
                            width: 45,
                            height: 45,
                            alignItems: 'center',
                            justifyContent: 'center',
                            elevation: focused ? 2 : 0,
                        }}>
                            <Feather name="user" size={26} color={ focused ? colors.SECOND_COLOR : colors.ICON_COLOR} />
                        </View>
                    )
                }}
            />
        </Menu.Navigator>
    )
}
