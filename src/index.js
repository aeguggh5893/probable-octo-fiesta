// Create a dialog element and append to the body
// Form tag should be appended in the body
// Within the form tag, there should be a text input, cancel button, and submit button
// The input that is submitted should be outputted in the console
// Need to find a way to grab the inputs from the form

const body = document.querySelector('body');

const ul = document.createElement('ul');

const dialog = document.querySelector('dialog');

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    dialog.close();
})

function sendMessage() {
    
    dialog.showModal();

}

const button = document.createElement('button');
button.textContent = 'Send Message!';
button.addEventListener('click', sendMessage);


body.appendChild(button);
body.appendChild(ul);