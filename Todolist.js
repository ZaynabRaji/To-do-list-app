// Select elements
const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todoInput');
const todosContainer = document.getElementById('todosContainer');

// Array to store to-dos
let todos = [];

// Event listener for form submission
todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo();
});

// Function to add a to-do
function addTodo() {
    const todoText = todoInput.value;
    if (todoText === '') return;

    // Add the to-do to the array
    todos.push(todoText);

    // Display the to-dos
    displayTodos();

    // Clear the input field
    todoInput.value = ' ';
}

// Function to display the to-dos
function displayTodos() {
    // Clear the to-do container
    todosContainer.innerHTML = '';

    // Loop through the to-dos and create elements
    todos.forEach((todo, index) => {
        const todoElement = document.createElement('div');
        todoElement.textContent = todo;

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteTodo(index);
        });

        todoElement.appendChild(deleteButton);
        todosContainer.appendChild(todoElement);
    });
}

// Function to delete a to-do
function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodos();
}