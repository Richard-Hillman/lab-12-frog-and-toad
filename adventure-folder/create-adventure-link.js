function createAdventureLink(adventure) {
    const link = document.createElement('a');
    link.classList.add('adventure');

    // const searchParams = new URLSearchParams();
    // searchParams.set('id', adventure.id);
    // link.href='quest?' + searchParams.toString();

    link.href = '../quest/?id' + adventure.id;

    return link;    
}

export default createAdventureLink;
