function howGrumpy(choice, adventureID, user) {
    // adds grumpiness to toad based on user choices
    user.grumpyLevel += choice.grumpyLevel;
    // add buttons to users backpack according to choices
    user.buttons += choice.buttons;
    // make adventure complete!
    user.completed[adventureID] = true;
}

export default howGrumpy;
