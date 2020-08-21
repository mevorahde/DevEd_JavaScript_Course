function sayHi() {
  console.log(`hello there ${name}`);
  changeName();
  console.log(`sayHi is finished`);
}

function changeName() {
  name = "Bobby";
  console.log(`we changed it to ${name}`);
  console.log(`changeName is finished`);
}

let name = "dev ed";

sayHi();

console.log(`We are done with the code`);
