const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");

const TODOS_KEY="todos";

let todos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    todos=todos.filter((toDo)=>toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id=newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText=newToDo.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event)
{
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    const newObj={
        text:newToDo,
        id:Date.now(),
    };
    todos.push(newObj);
    paintToDo(newObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos= localStorage.getItem(TODOS_KEY);

if(savedToDos!==null){
    const paredToDos=JSON.parse(savedToDos);
    todos=paredToDos;
    //console.log(paredToDos);
    paredToDos.forEach(paintToDo);
}