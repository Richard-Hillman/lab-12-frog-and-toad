import { getUser } from '../utils/storage-utils.js';
import isGrumpy from './isGrumpy.js';

function loadChar() {

    // pulling DOM elements for header stats
    const name = document.getElementById('name');
    const buttons = document.getElementById('buttons');
    const grumpyLevel = document.getElementById('grumpyLevel');

    // grabs user from local storage to find out what user state is
    const user = getUser();

    // if no local storage user then  redirect back to char selection (change back to char selection)
    if (!user) {
        window.location = '../adventure-folder/index.html';
   
    // places user name (frog or toad)
        name.textContent = user.name;
    // what buttons?
        buttons.textContent = user.buttons;
        console.log(user.buttons)
    // this determines if toad is too grumpy and if so start over, if not display grumpy level.
        if (isGrumpy(user)) {
            grumpyLevel.textContent = 'Toad is too GRUMPY and they are going back to bed!';
        // need to add return to house page or start adventure over
        }
        else {
            grumpyLevel.textContent = user.grumpyLevel;
        }

    }
}

export default loadChar;