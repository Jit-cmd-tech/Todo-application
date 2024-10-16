let todoList = [];


function addTodo(){
  let inputElement=document.querySelector('#todo-input');
  let todoItem=inputElement.value;
  console.log(todoItem);
  todoList.push(todoItem);
  inputElement.value='';
  displayItems();
}

function displayItems(){
  let containerElement=document.querySelector('.todo-container');
  let newHtml='';

  for(let i=0; i<todoList.length; i++){
    newHtml+=`
    <P>${todoList[i]}</P>
    <button>Delete</button>
    `;
  }
  containerElement.innerHTML=newHtml;

  // displayElement.innerText='';
  // for(let i=0; i<todoList.length; i++){
  //   displayElement.innerText=displayElement.innerText + '\n' + todoList[i];
}
