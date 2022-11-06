const todoInput = document.querySelector(".todoInput");
const addBtn = document.querySelector(".addBtn");
const addBtnIcon = document.querySelector(".addBtnIcon");
const todoList = document.querySelector(".todoList");

const addTodo = (input) => {
  const todo = document.createElement("div");
  const addedTodoInput = document.createElement("input");
  const btns = document.createElement("div");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const editLogo = document.createElement("i");
  const deleteLogo = document.createElement("i");

  todo.classList.add("todo");
  addedTodoInput.classList.add("addedTodoInput");
  addedTodoInput.value = input;
  btns.classList.add("btns");
  editBtn.classList.add("editBtn");
  editLogo.classList.add("fa-solid", "fa-pen-to-square");
  deleteBtn.classList.add("deleteBtn");
  deleteLogo.classList.add("fa-solid", "fa-trash");

  todoList.append(todo);
  todo.append(addedTodoInput);
  todo.append(btns);
  btns.append(editBtn);
  editBtn.append(editLogo);
  btns.append(deleteBtn);
  deleteBtn.append(deleteLogo);

  todoInput.value = "";

  editBtn.addEventListener("click", () => {
    addedTodoInput.focus();
  });

  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(todo);
  });
};

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  todoInput.value !== ""
    ? addTodo(todoInput.value)
    : alert("Please fill the input.");
});

addBtnIcon.addEventListener("click", (e) => {
  e.preventDefault();
  todoInput.value !== ""
    ? addTodo(todoInput.value)
    : alert("Please fill the input.");
});
