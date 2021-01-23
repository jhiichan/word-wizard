import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../constants/colors';

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        paddingLeft: 5,
        paddingVertical: 5
    },
    menuIcon: {
        color: colors.white,
        fontSize: 36
    }
});

export default ({onPress}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <MaterialIcons name="menu" style={styles.menuIcon} />
            </TouchableOpacity>
        </View>
    );
};