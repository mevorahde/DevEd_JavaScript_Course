///////////////////
//Constructor Function
//////////////////

function ToDo(name, completed) {
  //   console.log(this);
  this.name = name;
  this.completed = completed;
  this.getTodoName = function () {
    console.log(this.name);
  };
  this.checkCompleted = function () {
    console.log("check");
  };
  this.deleteTodo = function () {
    console.log("deletes");
  };
}

ToDo.prototype.getTodoName = function () {
  console.log(this.name);
};

const todo = new ToDo("Buy Eggs", false);
const todo2 = new ToDo("Do my homework", false);

console.log(todo, todo2);

todo.getTodoName();
todo2.getTodoName();

//Can do this way....
// const arr = [1, 2, 3, 4, 5];

//Or this way.....
const arr = new Array(1, 2, 3, 4, 5);

arr.push(6);

console.log(arr);

const name = "David";

const objName = new String("hellothere");

console.log(objName);
console.log(name.toUpperCase());

console.log("Type of 'name': ", typeof name);
console.log("Type of 'objName': ", typeof objName);
