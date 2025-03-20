function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


let todoInput = document.querySelector('.input')
let addTodoButton = document.querySelector('.button')
let showTodos = document.querySelector('.todos-container')
let todo;
let todoList = []


addTodoButton.addEventListener('click', function(event) {
    event.preventDefault()
    todo = todoInput.value
    if(todo){
        todoList.push({
            id: uuid(),
            todo: todo,
            isCompleted:false
        })
    }
    renderTodoList(todoList)
})

showTodos.addEventListener('click', ()=>{
    console.log('clicked');
    
})

function renderTodoList(todoList){
    showTodos.innerHTML = todoList.map(({ id,todo,isCompleted}) => `<div><input id='item-${id}' type='checkbox'><label for='item-${id}' class ='todo'>${todo}</label><button>Delete</button></div>`)
}