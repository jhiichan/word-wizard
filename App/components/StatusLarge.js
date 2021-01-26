import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
        alignItems: 'center',
        paddingVertical: 15,
        marginVertical: 10,
        marginHorizontal: 15 
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
        marginTop: 10,
        width: 150,
        height: 150
    }
});

export default ({playerName, playerLevel, playerHP, playerMaxHP, playerMP, playerMaxMP, imageAssetSrc}) => {
    return(
        <View style={styles.container}>
            <Text style={[styles.textInfo, styles.textName]}>{playerName}</Text>
            <Text style={[styles.textInfo, styles.textLevel]}>Level {playerLevel}</Text>
            <Text style={[styles.textInfo, styles.textStat]}>HP: {playerHP}/{playerMaxHP}</Text>
            {playerMaxMP === 0 && (
                <Text style={[styles.textInfo, styles.textStat]}>HP: {playerMP}/{playerMaxMP}</Text>
            )}
            <Image
                style={styles.profileImage}
                source={imageAssetSrc}
            />
        </View>
    );
};