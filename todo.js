let todoContainerEl = document.getElementById("todoItems");
let buttonEl = document.getElementById("addBtn");
let userInputEl =document.getElementById("userInput");
let errorEl = document.getElementById("error");
let id = 0;

function addTodoItem(){

     if(userInputEl.value === ""){
          errorEl.textContent = "Please Enter Input!!"
     }else{
          errorEl.textContent = "";
          id += 1
    
          let todoId = "todo"+id;
          let todoItem = document.createElement("li");
          todoItem.classList.add("todo")
          todoItem.setAttribute("id",todoId)
          todoContainerEl.appendChild(todoItem);

          let checkboxId = "checkbox"+id;
          let inputEl = document.createElement("input");
          inputEl.type = "checkbox";
          inputEl.setAttribute("class","check-box")
          inputEl.id = checkboxId;
          todoItem.appendChild(inputEl)

          let labelContainerEl = document.createElement("div");
          labelContainerEl.classList.add("delete-container")
          todoItem.appendChild(labelContainerEl);


          let labelEl = document.createElement("label");
          labelEl.setAttribute("for",checkboxId);
          labelEl.textContent = userInputEl.value;
          labelEl.classList.add("label")
          labelContainerEl.appendChild(labelEl);

          let deleteContainer = document.createElement("div");
          labelContainerEl.appendChild(deleteContainer)

          let deleteEl = document.createElement("i");
          deleteEl.setAttribute("class","fa-solid fa-trash icon");
          deleteContainer.appendChild(deleteEl)

          deleteEl.addEventListener("click", () => {
               todoContainerEl.removeChild(todoItem)
          })

          userInputEl.value = "";
               }
    
}
buttonEl.addEventListener("click", addTodoItem)
