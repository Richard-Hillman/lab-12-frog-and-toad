function choiceCreator(choice) {
    const label = document.getElement('label');
    // label.classList.add('choice');
    
    const description = document.createElement('span');
    description.textContent = choice.description;
    
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.required = true;
    radio.value = choice.id;

    label.appendChild(description, radio);
    return label;
}

export default choiceCreator;

// adventures.choices.forEach(choice => {
//     const label = document.createElement('label');
//     const span = document.createElement(span);
    
//     span.textcontent = choice.description;
    
//     const radio = document.createElement('input');
//     radio.type = 'radio';
//     radio.value = choice.id;
//     radio.name = 'choices';
    
//     label.append(span, radio);
    
//     form.appendchild(label);
// });