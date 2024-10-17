let todoList = [
  {item:'Buy Milk',
    dueDate: '4/10/2023'
  },
  {item:'Go to College',
    dueDate: '4/10/2023'
  }
];

displayItems();
function addTodo(){
  let inputElement=document.querySelector('#todo-input');
  let dateElement=document.querySelector('#date-input');
  let todoItem=inputElement.value;
  let todoDate=dateElement.value;
  // console.log(todoItem);
  todoList.push({item:todoItem,dueDate:todoDate});
  inputElement.value='';
  dateElement.value='';
  displayItems();
}

function displayItems(){
  let containerElement=document.querySelector('.todo-container');
  let newHtml='';

  for(let i=0; i<todoList.length; i++){
    // let item=todoList[i].item;
    // let dueDate=todoList[i].dueDate;
    let {item,dueDate}=todoList[i];
    newHtml+=`
    
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete" onclick="todoList.splice(${i},1);displayItems();">Delete</button>
    
    `;
  }
  containerElement.innerHTML=newHtml;

  // displayElement.innerText='';
  // for(let i=0; i<todoList.length; i++){
  //   displayElement.innerText=displayElement.innerText + '\n' + todoList[i];
}
