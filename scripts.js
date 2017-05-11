const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const ulEl = document.querySelector("ul");

buttonEl.addEventListener("click", addTodo());

addTodo = () => {
	let userInput = input.El.value;
	if(userInput.trim() == ""){
		return;
	}
	let todoLi = document.createElement("li");
	ulEl.appendChild("todoLi");
}