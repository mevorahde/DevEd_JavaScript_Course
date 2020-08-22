//FUNCTIONS -> SPECIAL OBJECT
//BIND, CALL, APPLY

const person = {
  firsname: "David",
  lastname: "Developer",
  getName() {
    console.log(`${this.firsname} ${this.lastname}`);
  },
};

// person.getName();

function registerUser(country, lang) {
  //Additional functionality....
  this.getName();
  console.log(`My country is ${country} and my language is ${lang}`);
}

//BIND WAY
const register = registerUser.bind(person);
register("United States", "English");

//CALL WAY
registerUser.call(person, "Switzerland", "Swiss-German");

//APPLY WAY
registerUser.apply(person, ["Greece", "Greek"]);
