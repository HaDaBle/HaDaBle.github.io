/*const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button")*/

const loginForm = document.querySelector("#login-form");
const loginInput =document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logout =document.querySelector("#logout-form")
const todoForm=document.querySelector("#todo-form");


const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
    //event.preventDefault();
    const username = loginInput.value;
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    greeting.innerText=username+"님, 환영합니다."
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

function onLogoutBtn(event){
    localStorage.removeItem(USERNAME_KEY);
}

loginForm.addEventListener("submit",onLoginSubmit);
logout.addEventListener("submit",onLogoutBtn);

const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername===null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    greeting.innerText=`${savedUsername}님, 환영합니다.`;
    logout.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
}
