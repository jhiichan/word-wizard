import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Battle from '../screens/Battle';
import SpellList from '../screens/SpellList';

import colors from '../constants/colors';

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 10
    },
    headerIcon: {
        color: colors.primary,
        fontSize: 36
    }
});

const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator
        //headerMode="none"
        initialRouteName="Home"
    >
        <MainStack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <MainStack.Screen name="Menu" component={Menu} />
        <MainStack.Screen name="Battle" component={Battle} options={{headerShown: false}} />
    </MainStack.Navigator>
);

const ModalStack = createStackNavigator();
const ModalStackScreen = () => (
    <ModalStack.Navigator mode="modal">
        <ModalStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{headerShown: false}}
        />
        <ModalStack.Screen
            name="SpellList"
            component={SpellList}
            options={({navigation, route}) => ({
                title: route.params && route.params.title,
                headerLeft: null,
                headerRight: () => (
                    <TouchableOpacity
                        style={styles.headerContainer}
                        onPress={() => navigation.pop()}
                    >
                        <MaterialIcons name="close" style={styles.headerIcon} />
                    </TouchableOpacity>
                )
            })}
        />
    </ModalStack.Navigator>
);

export default () => (
    <NavigationContainer>
        <ModalStackScreen />
    </NavigationContainer>
);