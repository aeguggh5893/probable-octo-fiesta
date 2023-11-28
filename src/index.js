// Start organizing all the functions into seperate modules
// Clean up code and try to follow SOLID principles

// HTML DOM Creation

const body = document.querySelector('body');

const ul = document.createElement('ul');

const dialog = document.querySelector('dialog');

// HTML DOM Creation

// HTML DOM Interaction
function openModal() {  
    dialog.showModal();
}

// HTML DOM Interaction


// Dialog/Form Interaction

const cancelButton = document.querySelector('#cancel');
cancelButton.addEventListener('click', () => {
    dialog.close();
});

const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    getValues();

    dialog.close();

});

// Dialog/Form Interaction

// Function for interacting between DOM and JS
function getValues() {
    let textInput = document.querySelector('#task-name');
    let text = textInput.value;
    textInput.value = "";
    
    let li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

// Function for interacting between DOM and JS

// HTML DOM Creation

const button = document.createElement('button');
button.textContent = 'Open Modal!';
button.addEventListener('click', openModal);

body.appendChild(button);
body.appendChild(ul);

// HTML DOM Creation