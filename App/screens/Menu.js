import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { MenuItem, MenuItemSeparator } from '../components/MenuItem';

import colors from '../constants/colors';

const styles = StyleSheet.create({
    menuIcon: {
        color: colors.primary,
        paddingRight: 5,
        fontSize: 24
    }
});

export default ({navigation}) => {
    return(
        <SafeAreaView>
            <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
            
            <MenuItem
                title="Home"
                onPress={() => navigation.push('Home')}
                icon={<MaterialIcons name="home" style={styles.menuIcon} />}
            />

            <MenuItemSeparator />

            <MenuItem
                title="Battle"
                onPress={() => navigation.push('Battle')}
                icon={<MaterialIcons name="games" style={styles.menuIcon} />}
            />
        </SafeAreaView>
    );
};