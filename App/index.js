import React from 'react';

import Navigation from './configs/Navigation';
import { GameContextProvider } from './util/GameContext';

export default () => (
    <GameContextProvider>
        <Navigation />
    </GameContextProvider>
);