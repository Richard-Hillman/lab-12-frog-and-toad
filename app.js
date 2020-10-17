// import functions 
import { saveUser } from './utils/storage-utils.js';
import loadChar from './char-state/char-state.js';

// grab my form, why i have no idea, but i got a form from my page
const form = document.getElementById('formulate');

// Event Listener what are you doing event listener
// im submitting my character
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // makeing a new formdata thingy in my form
    const data = new FormData(form);    
    
    // creating my user
    const user = ({
        name: data.get('frogtoad'),
        buttons: 0,
        grumpyLevel: 0,
        completed:{}
    });
    // saving my user
    saveUser(user);

    // go to your first quest
    window.location.href = '../map.html';
});
