var todoList = {
    todos: [],
    displayTodo: function() {
        if (this.todos.length === 0) {
            console.log(`Your todo list  is empty!`);
        } else {
            console.log(`My Todos:`);
            for (var i = 0; i < this.todos.length; i++) {

                if (this.todos[i].completed === true) {
                    console.log(`(x)`, this.todos[i].todoText);
                } else {
                    console.log(`()`, this.todos[i].todoText);
                }
            }
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText,
            completed: false
        });
        this.displayTodo();
    },
    changeTodo: function(position, newValue) {
        this.todos[position].todoText = newValue;
        this.displayTodo();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodo();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodo();
    },
    toggleAll: function() {
        var completedTodos = 0,
            totalTodos = this.todos.length;

        //counting the numbr of completed todos
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        // fi everything is true, make it false,otherwise make them true.


        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++)
                this.todos[i].completed = false;
        } else {
            for (var i = 0; i < totalTodos; i++)
                this.todos[i].completed = true;
        }

        this.displayTodo();
    }
}



var handlers = {
    displayTodo: function() {
        todoList.displayTodo();
        view.displayTodo();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodo();
    },
    addTodo: function() {
        var addTodo = document.getElementById(`addTodoText`);
        todoList.addTodo(addTodo.value);
        addTodo.value = ``;
        view.displayTodo();
    },
    changeTodo: function() {
        var position = document.getElementById(`newTodoPosition`);
        var newValue = document.getElementById(`newTodoValue`);
        if ((position.valueAsNumber <= 0) | (position.value > todoList.todos.length)) {
            alert(`invalid position number`);
            position.value = ``;
        } else if (position.valueAsNumber >= 1) {
            position.value--;
            todoList.changeTodo(position.valueAsNumber, newValue.value);
            position.value = ``;
            newValue.value = ``;
        }
        view.displayTodo();
    },
    deleteTodo: function() {
        var toDeletePosition = document.getElementById(`toDeletePosition`);
        if ((toDeletePosition.valueAsNumber <= 0) | (toDeletePosition.value > todoList.todos.length)) {
            alert(`invalid position number`);
            toDeletePosition.value = ``;
        } else if (toDeletePosition.valueAsNumber >= 1) {
            toDeletePosition.value = toDeletePosition.value - 1;
            todoList.deleteTodo(toDeletePosition.valueAsNumber)
            toDeletePosition.value = ``;
        }
        view.displayTodo();
    },

    toggleCompleted: function() {
        var toggleCompletedPosition = document.getElementById(`toggleCompletedPosition`);
        if ((toggleCompletedPosition.valueAsNumber <= 0) | (toggleCompletedPosition.value > todoList.todos.length)) {
            alert(`invalid position number`);
            toggleCompletedPosition.value = ``;
        } else if (toggleCompletedPosition.valueAsNumber >= 1) {
            toggleCompletedPosition.value--;
            todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
            toggleCompletedPosition.value = ``;
        }
        view.displayTodo();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodo();
    }
}


var view = {
    displayTodo: function() {
        var todoUl = document.querySelector(`ul`);
        todoUl.innerHTML = ``;

        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement(`li`);
            var todo = todoList.todos[i]
                //((x) todo text),
                //todo text with completion
            todoLi.textContent = todoTextWithCompletion;
            var todoTextWithCompletion = ``;

            if ((todo.completed === true) && (todo.todoText !== null)) {
                todoTextWithCompletion = `(x) ` + todo.todoText;
            } else {
                todoTextWithCompletion = `( ) ` + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion;

            todoUl.appendChild(todoLi);
        }
    }


};