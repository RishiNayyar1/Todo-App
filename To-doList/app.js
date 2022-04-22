//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//eventlistener

todoButton.addEventListener('click', addTodo);



//functions

function addTodo(event){
    event.preventDefault(); //to prevent the browser from refreshing when clicking
    
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    //create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value; //takes input from the user 
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //create mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    
    //create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.append(todoDiv);

    //clear todo input value
 todoInput.value = ""; 


}