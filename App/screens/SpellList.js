import React, { useContext } from "react";
import { StyleSheet, StatusBar, FlatList, View } from "react-native";

import { MenuItem } from '../components/MenuItem';
import { GameContext } from '../util/GameContext';

import colors from '../constants/colors';

export default ({navigation}) => {

    const {
        castableSpells
    } = useContext(GameContext);

    return(
        <View>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <FlatList
                data={castableSpells}
                renderItem={({item}) => {
                    return(
                        <MenuItem
                            title={item}
                        />
                    );
                }}
                keyExtractor={(item) => item}
            />
        </View>
    );
};