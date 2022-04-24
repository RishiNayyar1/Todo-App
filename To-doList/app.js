//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//eventlistener

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);



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
    const item = e.target; //full element tag statement with class in it
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
         todo.classList.toggle('completed'); //adds a completed class to that particular div    
    
        }
}   

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) { 
        const mStyle = todo.style;  
        if(mStyle != undefined && mStyle != null){
            switch (e.target.value) {
                case "all":
                    mStyle.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains('completed')) {
                        mStyle.display = 'flex';
                    } else {
                        mStyle.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (todo.classList.contains('completed')){
                        mStyle.display = 'none';
                    }
                    else{
                        mStyle.display = "flex";
                    }
                    break;
            }
        }
    })
}