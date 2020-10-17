import { getUser } from '../utils/storage-utils.js';
import adventures from '../data/adventure-data.js';
import loadChar from '../char-state/char-state.js';
import createAdventureLink from '../adventure-folder/create-adventure-link.js';
import completedAdventure from '../adventure-folder/complete-adventure.js';
import completedAll from '../adventure-folder/completedAll.js';
import isGrumpy from '../char-state/isGrumpy.js';

loadChar();

const user = getUser();

if (isGrumpy(user) || completedAll(adventures, user)) {
    window.location = '../houseOfGrump';
}

const nav = document.getElementById('adventures');

for (let i = 0; i < adventures.length; i++) {
    const adventure = adventures[i];
    let adventureDisplay = null;
    
    if (user.completed[adventure.id]) {
        adventureDisplay = completedAdventure(adventure);
    }
    else {
        adventureDisplay = createAdventureLink(adventure);
    }

    nav.appendChild(adventureDisplay);
}
