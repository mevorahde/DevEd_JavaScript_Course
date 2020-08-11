//LOCAL STORAGE
// localStorage.setItem("todo", "Feed the cat");
// localStorage.setItem("user", "David");
// localStorage.setItem("todo", "food myself");

// localStorage.clear();

//SESSION STORAGE
// sessionStorage.setItem("todoList", "Session storage to feed the cat");

//GETTING STUFF BACK
// const user = localStorage.getItem("user");

// console.log(user);

const todoList = ["feed the cat", "wash", "listen to classical music"];

localStorage.setItem("todos", JSON.stringify(todoList));

const retrieved = JSON.parse(localStorage.getItem("todos"));

console.log(retrieved);
