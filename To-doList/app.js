//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//eventlistener

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);



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
    
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.append(todoDiv);

    //Clear todo input value
 todoInput.value = ""; 
}

function deleteCheck(e) {
    console.log(e.target);
    const item = e.target;
    //Delete Todo
    if (item.classList[0] === "trash-btn") { //classlist[0] means the first class of the element button, which is trashbtn
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }   

    //Check Todo
    if (item.classList[0] === "complete-btn") {
         const todo = item.parentElement;
         todo.classList.toggle('completed');
    }
}   