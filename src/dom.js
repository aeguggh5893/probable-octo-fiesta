export default function createPage() {

    const ul = document.createElement('ul');
    const button = document.createElement('button');
    button.textContent = 'Open Modal!';

    const body = document.querySelector('body');
    body.appendChild(button);
    body.appendChild(ul);

    const dialog = document.createElement('dialog');
    const form = document.createElement('form');

    const textInput = document.createElement('input');
    setOptions(textInput, 'text', 'title', 'title');

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.type = 'submit';
    cancelButton.formMethod = 'dialog';
    
    cancelButton.addEventListener('click', () => {
        dialog.close();
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    submitButton.id = 'submit';

    form.appendChild(textInput);
    form.appendChild(cancelButton);
    form.appendChild(submitButton);

    dialog.appendChild(form);

    body.appendChild(dialog);

    button.addEventListener('click', () => {
        dialog.showModal();
    });
}

function setOptions(input, type, name, id) {
    input.type = type;
    input.name = name;
    input.id = id;
}