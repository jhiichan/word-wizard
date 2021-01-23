import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5,
        alignItems: 'center'
    },
    textInfo: {
        color: colors.white,
        paddingHorizontal: 5
    },
    textName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    profileImage: {
        width: 100,
        height: 100
    }
});

export default ({playerName, playerLevel, playerHP, playerMaxHP, playerMP, playerMaxMP}) => {
    return(
        <View style={styles.container}>
            <Text style={[styles.textInfo, styles.textName]}>{playerName}</Text>
            <Text style={[styles.textInfo, styles.textLevel]}>Level {playerLevel}</Text>
            <Text style={[styles.textInfo, styles.textStat]}>HP: {playerHP}/{playerMaxHP}</Text>
            <Image
                style={styles.profileImage}
                source={require("../assets/images/dummy_large.png")}
            />
        </View>
    );
};