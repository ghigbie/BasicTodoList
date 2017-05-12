const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const ulEl = document.querySelector("ul");

buttonEl.addEventListener("click", addTodo);

function addTodo(){
	var userInput = inputEl.value;
	console.log(userInput);
	if(userInput.trim() == ""){
		return;
	}
	var todoLi = document.createElement("li");
	todoLi.innerHTML = userInput;
	ulEl.appendChild(todoLi);
}