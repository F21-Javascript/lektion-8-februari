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
const inputElem = document.querySelector('#todo-text');
const addTodoButton = document.querySelector('#add-todo');

function createTodoItem(todo) {
    const todoItem = document.createElement('li');
    todoItem.innerText = todo.task;
    todoItem.setAttribute('data-id', todo.id);
    todoListElem.append(todoItem);

    todoItem.addEventListener('click', (event) => {
        const todoItemId = event.target.getAttribute('data-id');
        
        deleteTodo(todoItemId);
    });
}

function displayTodos(todos) {
    todoListElem.innerHTML = '';

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

async function addTodo(todoText) {
    const body = {
        task: todoText
    }

    const response = await fetch('https://awesome-todo-api.herokuapp.com/tasks', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
    displayTodos(data.todo);
}

/**
 * Ta bort en todo
 * 1. Lägg till id på varje li-tagg
 * 2. Sätt en event-listener på varje li-tagg
 * 3. När man klickar på en todo så hämta id:et från li-taggen
 * 4. Gör ett fetch-anrop med delete
 */

async function deleteTodo(todoId) {
    // Lägg till funktionalitet för att ta bort en todo
    const response = await fetch(`https://awesome-todo-api.herokuapp.com/tasks/${todoId}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    
    if (data.success) {
        getTodos();
    }
}
 
addTodoButton.addEventListener('click', () => {
    const todoText = inputElem.value; // Hämta texten från inputfältet

    addTodo(todoText);
});

getTodos();