function createAdventureLink(adventure) {
    const link = document.createElement('a');
    link.classList.add('adventure');

    // const searchParams = new URLSearchParams();
    // searchParams.set('id', adventure.id);
    // link.href='quest?' + searchParams.toString();

    link.href = '../adventure-folder/?id' + adventure.id;
    // link.href = `../adventures/?id=${adventure.id}`;
    // link.style.top = adventure.map.top;
    // link.style.left = adventure.map.right;
    
    return link;    

}

export default createAdventureLink;
