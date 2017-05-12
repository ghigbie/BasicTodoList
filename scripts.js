const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const ulEl = document.querySelector("ul");

buttonEl.addEventListener("click", addTodo);

function addTodo(){
	let userInput = inputEl.value;
	console.log(userInput);
	if(userInput.trim() == ""){
		return;
	}
	let todoLi = document.createElement("li");
	todoLi.textContent = userInput;
	todoLi.addEventListener("click", removeTodo);
	ulEl.appendChild(todoLi);
	inputEl.value = "";
}

function removeTodo(event){
	var clickedLi = event.target;
	clickedLi.parentNode.removeChild(clickedLi);
}