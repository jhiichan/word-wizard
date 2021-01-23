import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import NavBar from '../components/NavBar';

import colors from '../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    }
});

export default ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={colors.background} />
            <NavBar onPress={() => navigation.push('Menu')} />
        </View>
    );
};