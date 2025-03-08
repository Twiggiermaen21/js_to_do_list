const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

gsap.to('.todo-app', { y: 200, duration: 1 });

gsap.to('.todo-app-list', { y: 400, duration: 1 });



inputBox.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    if (inputBox.value === '') {
        alert('Please enter a task.');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = '';
    saveTasks();

}

listContainer.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    } else if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
    }

    saveTasks();
}, false);

function saveTasks() {
    localStorage.setItem('tasks', listContainer.innerHTML);
}

function loadTasks() {
    listContainer.innerHTML = localStorage.getItem('tasks');
}

loadTasks();