import adventures from '../data/adventure-data.js';
// import { getUser, saveUser } from '../utils/storage-utils.js';
import { findById } from '../utils/utils.js';
import choiceCreator from './choices.js';
import loadChar from '../char-state/char-state.js';
// import howGrumpy from './how-grumpy.js';
import { saveUser } from '../utils/storage-utils.js';
// import howGrumpy from '../quests/how-grumpy';
// import createAdventureLink from './create-adventure-link.js';
import completedAll from './completedAll.js';

// grab dom-----------------------------------------------------------------------------------------------
// create a URL for my page i think? 
// const myUrl = new URL('https://www.frogandtoadquests.dev');

// get the character and stick it at the top
loadChar();

// WHY DO I HAVE THIS HERE grabs my section so i can append it
const section = document.getElementById('section');


// get adventures query param
const searchParameters = new URLSearchParams(window.location.search);
// get adventures quest ID
const adventureID = searchParameters.get('id');
// find the adventure
const adventure = findById(adventures, adventureID);


// make stuff-----------------------------------------------------------------------------------------------

// make h3 element
const h3 = document.createElement('h3');
// take adventure title and put in h3 textcontent
h3.textcontent = adventure.title;
// appendchild 
section.append(h3);

// create a damn form
const form = document.createElement('form');
section.appendChild(form);
// function createChoice(choices) {    
// ----------------------------------------------------------------------------------------------------Problem CHild
// const label = document.createElement('label');
// const span = document.createElement('span');

for (let index = 0; index < adventure.choices.length; index++) {
    const choice = adventure.choices[index];
    const choiceDOM = choiceCreator(choice);
    form.appendChild(choiceDOM);
}

    // console.log(adventures[0].choices[0].description);
    // span.textContent = adventures.description;
    
    // const radio = document.createElement('input');
    // radio.type = 'radio';
    // radio.name = 'choices';
    // radio.value = choice.id;
    // radio.required = true;
    
// label.append(span, radio);
// form.appendchild(label);
// ----------------------------------------------------------------------------------------------------------------


// create my self a button for pressin
const button = document.createElement('button');
// call that button for pressin next
button.textContent = 'NEXT';
form.appendChild(button);

// because i have a form I have to have submit 
// now i also have to decide what to do when i click this submit button
// so far i have checked so i can grab the users selection
// I probably want to log that user selection and put into local storage and update my dom for my character

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const checked = document.querySelectorAll(':checked');
    const userChecked = checked.value;
    const choice = findById(adventure.choices, userChecked);
    
    const user = loadChar();

    user.grumpyLevel += choice.grumpyLevel;
    user.buttons += choice.buttons;

    user.completed.id = true;

    saveUser(user);
 
    if (user.grumpyLevel >= 10 || completedAll(adventures, user)) {
        window.location.href = '../grumpyHouse';
    }
});

// append that shit