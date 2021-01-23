import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5
    },
    textInfo: {
        color: colors.white,
        paddingHorizontal: 5
    },
    textName: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default ({playerName, playerLevel, playerHP, playerMaxHP, playerMP, playerMaxMP}) => {
    return(
        <View style={styles.container}>
            <Text style={[styles.textInfo, styles.textName]}>{playerName}</Text>
            <Text style={[styles.textInfo, styles.textLevel]}>Level {playerLevel}</Text>
            <Text style={[styles.textInfo, styles.textStat]}>HP: {playerHP}/{playerMaxHP}</Text>
            <Text style={[styles.textInfo, styles.textStat]}>MP: {playerMP}/{playerMaxMP}</Text>
        </View>
    );
};