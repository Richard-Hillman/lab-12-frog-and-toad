import adventures from '../data/quest-data.js';
// import { getUser, saveUser } from '../utils/storage-utils.js';
import { findById } from '../utils/utils.js';
import choiceCreator from './choices.js';
import loadChar from '../char-state/char-state.js';
import howGrumpy from './how-grumpy.js';
// import howGrumpy from '../quests/how-grumpy';
import createQuestLink from './create-quest.js';


// create a URL for my page i think? 
// const myUrl = new URL('https://www.frogandtoadquests.dev');

// get the character and stick it at the top
loadChar();

// WHY DO I HAVE THIS HERE grabs my section so i can append it
const section = document.getElementById('section');


// get adventures query param
const searchParameters = new URLSearchParams(window.location.search);

// get adventures quest ID
const adventureID = searchParameters.get['id'];
// find the adventure
const adventure = findById(adventures, adventureID);

// make stuff
// create a damn form

// make h3 element
const h3 = document.createElement('h3');
// take adventure title and put in h3 textcontent
h3.textcontent = adventure.title;
// appendchild 
section.append(h3);


// was doing something here
// const span = document.createElement('span');

adventure.choices.forEach('choice', () => {
    choiceCreator();
    section.append(label);
});

// because i have a form I have to have submit 
// now i also have to decide what to do when i click this submit button
// so far i have checked so i can grab the users selection
// I probably want to log that user selection and put into local storage and update my dom for my character

section.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const checked = document.querySelectorAll(':checked');
    const userChecked = checked.value;
    const choice = findById(adventure.choices, userChecked);
    
    myUrl.searchParams.append()

    howGrumpy();
    
});

// create my self a button for pressin
const button = document.createElement('button');
// call that button for pressin next
button.textContent = 'NEXT';
// append that shit
form.appenchild('button');