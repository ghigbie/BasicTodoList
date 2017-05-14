const inputEl = $("input");
const buttonEl = $("button");
const ulEl = $("ul");
let todos = [];

buttonEl.addEventListener("click", addTodo);

function addTodo(){
	let userInput = inputEl.val();
	console.log(userInput);
	if(userInput.trim() == ""){
		return;
	}
	let newTodo = {id: Math.random(), value: userInput};
	todos.push(newTodo);
	console.log(todos);
	$("<li> + userInput + </li>").appendTo(ulEl);
	todoLi.textContent = userInput;
	todoLi.click(removeTodo);
	todoLi.dataset.id = newTodo.id;
	ulEl.appendChild(todoLi);
	inputEl.value = "";

}

function removeTodo(event){
	let clickedLi = event.target;
	let itemId = clickedLi.dataset.id;
	for(let i = 0; i < todos.length; i++){
		if(todos[i].id == itemId){
			todos.splice(i, 1);
			break;
		}
	}
	console.log(todos);
	clickedLi.parentNode.removeChild(clickedLi);
}
