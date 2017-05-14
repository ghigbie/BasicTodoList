const inputEl = $("input");
const buttonEl = $("button");
const ulEl = $("ul");
let todos = [];

buttonEl.click(addTodo);

function addTodo(){
	let userInput = inputEl.val();
	console.log(userInput);
	if(userInput.trim() == ""){
		return;
	}
	let newTodo = {id: Math.random(), value: userInput};
	todos.push(newTodo);
	console.log(todos);
	$(`<li>${userInput}</li>`)
		.appendTo(ulEl)
		.attr("dataset-id", newTodo.id)
		.click(removeTodo);
	inputEl.val("");//clears input field;

}

function removeTodo(event){
	let clickedLi = $(this);
	let itemId = clickedLi.attr("dataset-id");
	for(let i = 0; i < todos.length; i++){
		if(todos[i].id == itemId){
			todos.splice(i, 1);
			break;
		}
	}
	console.log(todos);
	clickedLi.remove();
}
