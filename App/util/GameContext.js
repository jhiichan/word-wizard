import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameContextProvider = ({children}) => {
    const spellPlaceholder = 'Cast a Spell'

    const [castableSpells, setCastableSpells] = useState([]);
    const [hasSpellsOpened, setHasSpellsOpened] = useState(false);

    const [user, setUser] = useState({
        name: "The Master Wizard",
        level: 1,
        hp: 100,
        maxHP: 100,
        mp: 20,
        maxMP: 20,
        imageAssetSrc: require('../assets/images/dummy_large.png')
    });

    const [enemy, setEnemy] = useState({
        name: "Ground Golem",
        level: 1,
        hp: 100,
        maxHP: 100,
        mp: 0,
        maxMP: 0,
        imageAssetSrc: require('../assets/monsters/golem/asset_golem.png')
    });

    const [spellCasted, setSpellCasted] = useState(spellPlaceholder);

    const castSpell = () => {
        if(castableSpells.includes(spellCasted)) {
            let damage = spellCasted.length;
            let mpCost = 2;

            setUser((prevState) => ({
                ...prevState,
                mp: user.mp-mpCost
            }));
    
            setEnemy((prevState) => ({
                ...prevState,
                hp: enemy.hp-damage
            }));
        }

        setSpellCasted(spellPlaceholder);
        enemyTurn();
    };

    const enemyTurn = () => {
        let damage = enemy.level * 10;

        setUser((prevState) => ({
            ...prevState,
            hp: enemy.hp-damage
        }));
    }

    const contextValue = {
        user,
        enemy,
        spellCasted,
        setSpellCasted,
        castableSpells,
        setCastableSpells,
        spellPlaceholder,
        hasSpellsOpened,
        setHasSpellsOpened,
        castSpell
    };


    return (
        <GameContext.Provider value={contextValue}>
            {children}
        </GameContext.Provider>
    );
};