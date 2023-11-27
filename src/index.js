// Create a button and append to the body
// The button will console.log a message
// the console.log function should be imported from another module since this is the base module
// Create an unordered list and the input from the message will append li's to that ul
// console.log out the unordered list

const body = document.querySelector('body');

const ul = document.createElement('ul');

function sendMessage() {
    let message = prompt('Enter a message to send', 'Hello!');

    let li = document.createElement('li');
    li.textContent = message;

    ul.appendChild(li);

    console.log(ul);

}

const button = document.createElement('button');
button.textContent = 'Send Message!';
button.addEventListener('click', sendMessage);


body.appendChild(button);
body.appendChild(ul);