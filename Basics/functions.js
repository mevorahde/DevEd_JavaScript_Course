function greet(name) {
  console.log("Welcome to our website " + name);
}

console.log("Rest of the code");

function signUp() {
  let name = prompt("What is your name?");
  greet(name);
}
//
///
/////
signUp();

console.log(Math.random());
console.log(Math.max(1, 5));

let maxNR = Math.max(1, 5);
console.log(maxNR);

function max(nr1 = 0, nr2 = 0) {
  if (nr1 > nr2) {
    return nr1;
  } else {
    return nr2;
  }
}

let inbox = max(1, 5);
console.log(inbox);
