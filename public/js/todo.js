//list of todos
var todos = [`item 1`, `item 2`, `item 3`];

//there should be a function designated to display todos
function displayTodo() {
    console.log(`My todos:`, todos);
}

//function for adding new todos
function addTodo(todo) {
    todos.push(todo);
    displayTodo();
}

//function for changing a specific todo
function changeTodo(itemNO, newValue) {
    todos[itemNO] = newValue;
}

//function for deleting a specific todo.
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodo();
}