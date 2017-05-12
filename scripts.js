const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const ulEl = document.querySelector("ul");
let todos = [];

buttonEl.addEventListener("click", addTodo);

function addTodo(){
	let userInput = inputEl.value;
	console.log(userInput);
	if(userInput.trim() == ""){
		return;
	}
	let newTodo = {id: Math.random(), value: userInput};
	todos.push(newTodo);
	console.log(todos);
	let todoLi = document.createElement("li");
	todoLi.textContent = userInput;
	todoLi.addEventListener("click", removeTodo);
	todoLi.dataset.id = newTodo.id;
	ulEl.appendChild(todoLi);
	inputEl.value = "";

}

function removeTodo(event){
	let clickedLi = event.target;
	let itemId = clickedLi.dataset.id;
	clickedLi.parentNode.removeChild(clickedLi);
}
