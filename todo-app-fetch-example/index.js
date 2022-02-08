/**
 * Fetch - anrop
 * TODO API
 * 
 * URL: https://awesome-todo-api.herokuapp.com/tasks
 */

// fetch('https://awesome-todo-api.herokuapp.com/tasks').then((response) => {
//     console.log(response);
//     return response.json(); // Gör om svaret från webbservern till ett JSON-format som vi kan använda
// }).then((data) => {
//     console.log(data); // Svaret från webbservern i ett JSON-format
// });

const todoListElem = document.querySelector('#todos');

function createTodoItem(todo) {
    const todoItem = document.createElement('li');
    todoItem.innerText = todo.task;
    todoListElem.append(todoItem);
}

function displayTodos(todos) {
    console.log('Display todos', todos);
    for (const todo of todos) {
        console.log(todo);
        if (todo.hasOwnProperty('task')) {
            createTodoItem(todo);
        }
    }
}

async function getTodos() {
    const response = await fetch('https://awesome-todo-api.herokuapp.com/tasks');
    const data = await response.json();
    console.log(data);

    displayTodos(data.todos);
}

getTodos();