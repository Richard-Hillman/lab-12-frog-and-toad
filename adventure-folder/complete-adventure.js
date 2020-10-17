function completedAdventure(adventure) {
    const span = document.createElement('span');
    span.classList.add('adventure');
    span.classList.add('completed');

    span.style.top = adventure.map.top;
    span.style.left = adventure.map.left;

    span.textContent = adventure.title;
    return span;
}

export default completedAdventure;