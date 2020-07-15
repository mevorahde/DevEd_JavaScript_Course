const listUsers = ["David", "Johny", "John Snow", "Dev Ed"];

console.log(listUsers[0]);

console.log(typeof listUsers);

listUsers.pop();
console.log(listUsers);

listUsers.push("NEW");
console.log(listUsers);

listUsers.shift();
console.log(listUsers);

listUsers.unshift("NEW");
console.log(listUsers);

console.log(listUsers.length);

console.log(listUsers.indexOf("Johny"));
