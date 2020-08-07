let food = "apple";
let fruits = 5;
var x = 2;

function store() {
  console.log("Function Scope: " + food);
}

//GLOBAL SCOPE
console.log("Global Scope: " + food);

//FUNCTION SCOPE
store();

//BLOCK SCOPE
if (true) {
  console.log("Block Scope: " + food);
}

// function store() {
//   let food = "banana";
//   let fruits = 50;
//   console.log(food, fruits);
//   var x = 5;
// }

// //BLOCK SCOPE
// for (let fruits = 0; fruits <= 10; fruits++) {
//   console.log(fruits);
// }

// for (let x = 0; x <= 10; x++) {
//   console.log(fruits);
// }
// //local to the 'store' function, FUNCTION SCORE
// store();
// //Global, GLOBAL SCOPE
// console.log(food, fruits);

// console.log("Global of x: " + x);

//BLOCK SCOPE
// if (true) {
//   let food = "kiwi";
//   var x = 10;
// }

// console.log(food, x);
