// CREATE A TODO
  // - Write in the input box
  // - then click the button
  // - todo appears with the other todos

// COMPLETE A TODO
  // - click on a todo
  // - todo should disappear

// DATA MODEL
const Todo = {
    // List of Todos
    todos: [{text: "Breakfast"},{text: "Lunch"}],
    // Retrieve our todos
    getTodos: () => {return Todo.todos},
    // Adds a new todo
    createTodo: (newTodo) => {
        Todo.todos.push(newTodo)
        Todo.saveTodos()
    },
    // Remove Todo
    deleteTodo: (index) => {
        Todo.todos.splice(index, 1)
        Todo.saveTodos()
    },
    // Save Todos to localstorage
    saveTodos: () => {
        // turn the array into a string
        const arrayString = JSON.stringify(Todo.todos)
        // save array string in local storage
        localStorage.setItem("todos", arrayString)
    },
    // Load Todos from Localstorage
    loadTodos: () => {
        // get the string from localStorage
        const arrayString = localStorage.getItem("todos")
        if(arrayString){
            // turn the string back into an array
            const todos = JSON.parse(arrayString)
            // update the list of todos
            Todo.todos = todos
        }
    }
}

// RENDER FUNCTION
const render = () => {
    const main = document.querySelector("main")

    // empty the main div
    main.innerHTML = ""

    //loop over the todos, create a div for each todo
    Todo.getTodos().forEach((item, index) => {
        // create a div
        const div = document.createElement("div")

        // set the divs text to the todo
        div.innerText = item.text

        // add a class of "todo" to the div
        div.classList.add("todo")

        // append the div to the main
        main.append(div)

        // add a click event to delete each todo
        div.addEventListener("click", () => {
            // delete the todo
            Todo.deleteTodo(index)
            // update the DOM
            render()
        })
    })
}

Todo.loadTodos()
render()

// handle the form submission
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    // prevent refresh when form is submitted
    event.preventDefault()

    // generate a formData object
    const formData = new FormData(form)

    // create a new todo object
    const newTodo = {text: formData.get("todo")}

    // add the todo to array
    Todo.createTodo(newTodo)

    // update the DOM
    render()
})