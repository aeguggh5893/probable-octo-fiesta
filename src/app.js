class ToDoObjects {
    constructor(name, date) {
        this.name = name,
        this.date = date
    }
}

function createLi(arg1, arg2) {
    let li = document.createElement('li');
    li.textContent = `Task: ${arg1} Due Date: ${arg2}`;
    ul.appendChild(li);
}

function getTask() {
    let textInput = document.querySelector('#task-name');
    let text = textInput.value;
    textInput.value = "";

    return text
}

function getDate() {
    let dateInput = document.querySelector('#due-date');
    let date = dateInput.value;
    dateInput.value = "";
    
    return date
}