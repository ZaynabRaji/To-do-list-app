// Select elements
const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todoInput');
const todosContainer = document.getElementById('todosContainer');

// Array to store to-dos
let todos = [];

// Load to-dos from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        todos = JSON.parse(savedTodos);
        displayTodos();
    }
});

// Event listener for form submission
todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo();
});

// Function to add a to-do
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === '') return;

    // Add the to-do to the array as an object with text and completion status
    todos.push({ text: todoText, completed: false });

    // Save the updated todos to local storage
    saveTodos();

    // Display the to-dos
    displayTodos();

    // Clear the input field
    todoInput.value = '';
}

// Function to display the to-dos
function displayTodos() {
    // Clear the to-do container
    todosContainer.innerHTML = '';

    // Loop through the to-dos and create elements
    todos.forEach((todo, index) => {
        const todoElement = document.createElement('div');
        todoElement.textContent = todo.text;

        // Strike-through text if the to-do is completed
        if (todo.completed) {
            todoElement.style.textDecoration = 'line-through';
        }

        // Checkbox for marking the to-do as completed
        const checkButton = document.createElement('button');
        checkButton.innerHTML = todo.completed
            ? '<i class="fa-regular fa-circle" style="color: #fa0000;"></i>'
            : '<i class="fa-regular fa-circle-check" style="color: #3baa1d;"></i>';
        checkButton.style.backgroundColor = '#ffffff';  // Set the background color to white
        checkButton.style.border = 'none';              // Remove the border
        checkButton.style.padding = '5px';              // Add some padding
        checkButton.style.borderRadius = '5px';         // Add border radius for rounded corners
        checkButton.style.cursor = 'pointer';           // Change the cursor to a pointer on hover

        checkButton.addEventListener('click', () => {
            toggleComplete(index);
        });

        // Edit button
        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fa-solid fa-pencil" style="color: #ffffff;"></i>';
        editButton.addEventListener('click', () => {
            editTodo(index);
        });

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-regular fa-trash-can" style="color: #ffffff;"></i>';
        deleteButton.addEventListener('click', () => {
            deleteTodo(index);
        });

        todoElement.appendChild(checkButton);
        todoElement.appendChild(editButton);
        todoElement.appendChild(deleteButton);
        todosContainer.appendChild(todoElement);
    });
}

// Function to save to-dos to local storage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to delete a to-do
function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos(); // Save updated todos to local storage
    displayTodos();
}

// Function to edit a to-do
function editTodo(index) {
    const newTodoText = prompt('Edit your to-do:', todos[index].text);
    if (newTodoText !== null && newTodoText.trim() !== '') {
        todos[index].text = newTodoText.trim();
        saveTodos(); // Save updated todos to local storage
        displayTodos();
    }
}

// Function to toggle the completion status of a to-do
function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos(); // Save updated todos to local storage
    displayTodos();
}
