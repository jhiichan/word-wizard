import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import UserInfo from '../components/StatusSmall';
import EnemyInfo from '../components/StatusLarge';
import NavBar from '../components/NavBar';
import { GameContext } from '../util/GameContext';

import colors from '../constants/colors';
import spells from '../data/spells.json';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    quickSlotContainer: {
        marginVertical: 10,
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10
    },
    spellContainer: {
        marginVertical: 10,
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10
    },
    quickSlot: {
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    inputSpell: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
        paddingVertical: 25
    }
});

export default ({navigation}) => {
    const numberOfCastableSpells = 3

    const {
        user,
        enemy,
        spellCasted,
        setSpellCasted,
        setCastableSpells,
        spellPlaceholder,
        hasSpellsOpened,
        setHasSpellsOpened,
        castSpell
    } = useContext(GameContext);

    

    const openSpells = () => {
        if(!hasSpellsOpened) {
            let tempArray = [];
            let spellsArray = [];

            while(tempArray.length < numberOfCastableSpells) {
                let r = Math.floor(Math.random() * spells.length);
                if(tempArray.indexOf(r) === -1) {
                    tempArray.push(r);
                    spellsArray.push(spells[r]);
                }
            }

            setCastableSpells(spellsArray);

            navigation.push('SpellList', {title: 'Spells'})

            setHasSpellsOpened(true);
        }
    }

    const clearSpellInput = () => {
        if(spellCasted === spellPlaceholder)
            setSpellCasted('');
    }

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={colors.secondary} />

            <NavBar onPress={() => navigation.push('Menu')} />

            <UserInfo
                playerName={user.name}
                playerLevel={user.level}
                playerHP={user.hp}
                playerMaxHP={user.maxHP}
                playerMP={user.mp}
                playerMaxMP={user.maxMP}
            />

            <EnemyInfo
                playerName={enemy.name}
                playerLevel={enemy.level}
                playerHP={enemy.hp}
                playerMaxHP={enemy.maxHP}
                imageAssetSrc={enemy.imageAssetSrc}
            />

            <View style={styles.quickSlotContainer}>
                <TouchableOpacity
                    style={styles.quickSlot}
                    onPress={openSpells}
                >
                    <Text>Open Spells</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.spellContainer}>
                <TextInput
                    style={styles.inputSpell}
                    value={spellCasted}
                    onChangeText={(text) => setSpellCasted(text)}
                    onFocus={clearSpellInput}
                    onSubmitEditing={castSpell}
                />
            </View>

        </SafeAreaView>
    );
};