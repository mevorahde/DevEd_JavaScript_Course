const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const items = todoList.children;
const mainTitle = document.querySelector(".main-title");

//Click, scroll, resizing the browser

// //Attach a event listener
// button.addEventListener("click", function () {
//   const newItem = document.createElement("Li");
//   newItem.classList.add("item");
//   newItem.innerText = `Item ${items.length + 1}`;
//   todoList.appendChild(newItem);
//   todoNr.innerText = items.length;
// });

// todoNr.innerText = items.length;

////////////////////////////////////////////////////////

//Example of doing the same thing in two different ways
// button.addEventListener("click", function () {
//   console.log("New Item Added");
// });

//Same functonality as commented out stuff in the next 5 line
// button.addEventListener("click", addItem);

// function addItem() {
//   console.log("New Item Added");
// }

///////////////////////////////////////////////////////

// button.addEventListener("click", function () {
//   //   mainTitle.style.color = "red";
//   //   mainTitle.style.fontSize = "50px";

//   //   //or style using css and add the class via JS
//   //   mainTitle.classList.add("spectacular");

//   //Toggle to remove class
//   mainTitle.classList.toggle("spectacular");
// });

/////////////////////////////////////////////////////

button.addEventListener("keydown", function (event) {
  //Toggle to add/remove class when q key is pressed and held down
  if (event.keyCode === 81) {
    mainTitle.classList.toggle("spectacular");
  }
});
