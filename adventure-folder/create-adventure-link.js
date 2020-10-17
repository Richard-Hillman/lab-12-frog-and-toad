function createQuestLink(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');

    // const searchParams = new URLSearchParams();
    // searchParams.set('id', adventure.id);
    // link.href='quest?' + searchParams.toString();

    link.href = '../quest/?id' + quest.id;

    return link;    
}

export default createQuestLink;
