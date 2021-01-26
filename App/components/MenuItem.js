import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    textMenu: {
        fontSize: 20,
        color: colors.primary
    },
    separator: {
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20
    }
});

export const MenuItem = ({title, onPress, icon}) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        {icon}
        <Text style={styles.textMenu}>{title}</Text>
    </TouchableOpacity>
);

export const MenuItemSeparator = () => <View style={styles.separator} />