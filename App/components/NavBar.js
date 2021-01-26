import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../constants/colors';

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        marginLeft: 15,
        marginTop: 10
    },
    menuContainer: {
        padding: 5,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10
    },
    menuIcon: {
        color: colors.primary,
        fontSize: 36
    }
});

export default ({onPress}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.menuContainer} onPress={onPress}>
                <MaterialIcons name="menu" style={styles.menuIcon} />
            </TouchableOpacity>
        </View>
    );
};