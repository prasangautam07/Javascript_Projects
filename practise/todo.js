/* let date = document.querySelector("#date");
let todo_name = document.querySelector(".name");
let add_btn = document.querySelector(".add-btn");
let container = document.querySelector(".todo-container");
let todo_list = [
  "prasan","gautam","hello"
];
let todo_date = ["2024-04-01","2024-04-02","2024-04-03"];
renderTodoList();
function renderTodoList() {
  let todolistHtml = "";
  for (let i = 0; i <= todo_list.length - 1; i++) {
    let data = todo_list[i];
    let date = todo_date[i];
    let html = `<div>${data}</div>`;
    let date_html= `<div>${date}</div>`;
    let delete_html= `<button class="delete-btn" onclick=delete_list(${i}); 
    >Delete</button>`;
    console.log(html);
    console.log(date_html);
    todolistHtml += html;
    todolistHtml += date_html;
    todolistHtml += delete_html;
  }
  container.innerHTML = todolistHtml;

}

add_btn.addEventListener("click", () => {
  const name = todo_name.value;
  const display_date = date.value;
  todo_list.push(name);
  todo_date.push(display_date);
  console.log(display_date);
  console.log(name);
  todo_name.value = "";
  date.value = "";
  renderTodoList();
});
function delete_list(i) {
    todo_list.splice(i,1);
    todo_date.splice(i,1);
    renderTodoList();
} */

let date = document.querySelector("#date");
let todo_name = document.querySelector(".name");
let add_btn = document.querySelector(".add-btn");
let container = document.querySelector(".todo-container");
let todo_listObject = [
    {
    name:"prasan",
    date:"2024-04-01"
    }, {
        name:"gautam",
        date:"2024-04-02"
        }
];
console.log(todo_listObject[1]);
renderTodoList();
function renderTodoList() {
  let todolistHtml = "";
  for (let i = 0; i <= todo_listObject.length - 1; i++) {
    let data = todo_listObject[i].name;
    let date = todo_listObject[i].date;
    let html = `<div>${data}</div>`;
    let date_html= `<div>${date}</div>`;
    let delete_html= `<button class="delete-btn" onclick=delete_list(${i}); 
    >Delete</button>`;
    console.log(html);
    console.log(date_html);
    todolistHtml += html;
    todolistHtml += date_html;
    todolistHtml += delete_html;
  }
  container.innerHTML = todolistHtml;

}

add_btn.addEventListener("click", () => {
  const name = todo_name.value;
  const display_date = date.value;
  todo_listObject.push({
    name: name,
    date: display_date
  });
  console.log(todo_listObject);
  todo_name.value = "";
  date.value = "";
  renderTodoList();
});
function delete_list(i) {
    todo_listObject.splice(i,1);
    renderTodoList();
}

