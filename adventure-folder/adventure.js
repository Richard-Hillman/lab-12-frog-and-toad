import adventures from '../data/adventure-data.js';
import { getUser, saveUser } from '../utils/storage-utils.js';
import { findById } from '../utils/utils.js';
import choiceCreator from './choices.js';
import loadChar from '../char-state/char-state.js';
import howGrumpy from './how-grumpy.js';

// import howGrumpy from '../quests/how-grumpy';
// import createAdventureLink from './create-adventure-link.js';
// import completedAll from './completedAll.js';

// get the character and stick it at the top
loadChar();


// grab dom-----------------------------------------------------------------------------------------------

// get adventures query param
const searchParameters = new URLSearchParams(window.location.search);
// get adventures quest ID
const adventureID = searchParameters.get('id');
// find the adventure
const adventure = findById(adventures, adventureID);

const section = document.getElementById('section');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');
const description = document.getElementById('first');
const form = document.getElementById('choice-form');
const title = document.getElementById('title');


// set state------------------------------------------------------------------------------------------------

// make stuff-----------------------------------------------------------------------------------------------
title.textContent = adventure.title;
description.textContent = adventure.description;

// function createChoice(choices) {    
    // ----------------------------------------------------------------------------------------------------Problem CHild
for (let index = 0; index < adventure.choices.length; index++) {
    const choice = adventure.choices[index];
    const choiceDOM = choiceCreator(choice);
    form.appendChild(choiceDOM);
}

// section.appendChild(form);
// for each of the quest's choices



// const radio = document.createElement('input');
// radio.type = 'radio';
// radio.name = 'choices';
// radio.value = choice.id;
// radio.required = true;

// label.append(span, radio);
// form.appendchild(label);
// ----------------------------------------------------------------------------------------------------------------
// create my self a button for pressin

// create a damn form

// description.textContent = adventures[0].description;

// const h3 = document.createElement('h3');
// h3.textcontent = adventures.title;
// section.append(h3);

const button = document.createElement('button');
button.textContent = 'Decision';
form.appendChild(button);
// -------------------------------------------------------------------------------Next Button
// const button2 = document.createElement('button');
// button.textContent = 'Next';
// form.appendChild(button);
// -------------------------------------------------------------------------------
    // because i have a form I have to have submit 
    // now i also have to decide what to do when i click this submit button
    // so far i have checked so i can grab the users selection
    // I probably want to log that user selection and put into local storage and update my dom for my character
form.addEventListener('submit', (e) => {
    e.preventDefault();
        
    const formData = new FormData(form);
    const choiceId = formData.get('choice');
    
    const choice = findById(adventure.choices, choiceId);
    
    const user = getUser();
    howGrumpy(choice, adventure.id, user);
    saveUser(user);
    
    form.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;
});
    
    // const checked = document.querySelectorAll(':checked');
    // const userChecked = checked.value;
    // const choice = findById(adventure.choices, userChecked);
    
    // const user = loadChar();

    // user.grumpyLevel += choice.grumpyLevel;
    // user.buttons += choice.buttons;
    
    // user.completed.id = true;

    // saveUser(user);
    
    // if (user.grumpyLevel >= 10 || completedAll(adventures, user)) {
        //     window.location.href = '../grumpyHouse';
        // }

// append that shit