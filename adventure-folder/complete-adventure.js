// function completedAdventure(adventure) {
//     const span = document.createElement('span');
//     span.classList.add('adventure');
//     span.classList.add('completed');

//     span.textContent = adventure.title;
//     return span;
// }

// export default completedAdventure;

function completedAdventure(adventure) {
    const li = document.createElement('li');
    li.classList.add('adventure');
    li.classList.add('completed');

    li.textContent = adventure.title;
    return li;
}

export default completedAdventure;