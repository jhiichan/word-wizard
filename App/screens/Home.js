import React, { useContext } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import NavBar from '../components/NavBar';
import { GameContext } from '../util/GameContext';
import UserInfo from '../components/StatusLarge';

import colors from '../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
});

export default ({navigation}) => {

    const {
        user
    } = useContext(GameContext);

    return(
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={colors.secondary} />
            <NavBar onPress={() => navigation.push('Menu')} />
            <UserInfo
                playerName={user.name}
                playerLevel={user.level}
                playerHP={user.hp}
                playerMaxHP={user.maxHP}
                playerMP={user.mp}
                playerMaxMP={user.maxMP}
                imageAssetSrc={user.imageAssetSrc}
            />
        </View>
    );
};