// const headers = document.getElementsByTagName("h2");
// const list = document.getElementsByClassName("item");
// const button = document.getElementById("submit");

// const headers = document.querySelectorAll("h2");
// const list = document.querySelector(".item");
// const button = document.querySelector("#submit");
// const listH2 = document.querySelector("h2.item");

// console.log(headers);
// console.log(list);
// console.log(button);
// console.log(listH2);

// const collectionItems = document.getElementsByClassName("item");
// const nodeItems = document.querySelectorAll(".item");

// // console.log(collectionItems, nodeItems);

// // console.log(nodeItems.childNodes);
// // console.log(nodeItems.children);

// for (item of nodeItems) {
//   console.log("Node Item: ", item);
// }

// for (item of collectionItems) {
//   console.log("Collection Item: ", item);
// }

// nodeItems.forEach(function (item) {
//   console.log("For Each: ", item);
// });

// const collectionItems = document.getElementsByClassName("item");
// const todoList = document.getElementById("todo-list");
// const todoNr = document.getElementsByClassName("todo-nr")[0];

// const newItem = document.createElement("li");
// newItem.classList.add("item");
// newItem.innerText = "Item 3";

// const anotherItem = document.createElement("li");
// anotherItem.classList.add("item");
// anotherItem.innerText = "Item 4";

// todoList.appendChild(newItem);
// todoList.appendChild(anotherItem);

// //Update the amount of items that we have
// todoNr.innerText = collectionItems.length;

// console.log(collectionItems);

///////Static Example//////////////////////////////////////////

// const nodeItems = document.querySelectorAll(".item");
// const todoList = document.querySelector("#todo-list");
// const todoNr = document.querySelector(".todo-nr");

// const newItem = document.createElement("li");
// newItem.classList.add("item");
// newItem.innerText = "Item 3";

// const anotherItem = document.createElement("li");
// anotherItem.classList.add("item");
// anotherItem.innerText = "Item 4";

// todoList.appendChild(newItem);
// todoList.appendChild(anotherItem);

// //Update the amount of items that we have
// todoNr.innerText = nodeItems.length;

// console.log(nodeItems);

/////////Query Select making it dynamic///////////////////////

const todoList = document.querySelector("#todo-list");
const items = todoList.children;
const todoNr = document.querySelector(".todo-nr");

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 3";

const anotherItem = document.createElement("li");
anotherItem.classList.add("item");
anotherItem.innerText = "Item 4";

todoList.appendChild(newItem);
todoList.appendChild(anotherItem);

//Update the amount of items that we have
todoNr.innerText = items.length;

console.log(items);
