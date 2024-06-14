

let todoList = [
                {item: 'buy coclate', dueDate: '17/11/2023'},

                {item: 'vegtable', dueDate: '23/11/202'}
               ];
displayItem();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');

    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let tododate = dateElement.value;
    todoList.push({item: todoItem, dueDate: tododate});
    inputElement.value = '';
     dateElement.value = '';
    displayItem();
}

function displayItem() {
       let containerElement = document.querySelector('.todo-container');
      
      let newHtml = '';
      for(let i = 0; i < todoList.length; i++){
       
        let {item, dueDate} = todoList[i];
      newHtml += `
           
            <span>${item}</span>
            <span>${dueDate}</span>

            <button class="btn-delete" onclick="todoList.splice(${i}, 1);
             displayItem();">Delete</button>
         
      `;
       
       }
       containerElement.innerHTML = newHtml;
}