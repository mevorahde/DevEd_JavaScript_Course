//One '=' assign
const name = "David";

//Two '=' compare
5 == 5; //True

5 == 4; //False

//Not equal
5 != 3; //True

5 != 5; //Falde

//Greater Than
5 > 10; //False

10 > 5; //True

//Less Than
10 < 5; //False

5 < 10; //True

//Greater than or equal to
5 >= 5; //True

5 >= 10; //False

//Less than or equal to

5 <= 5; //True

10 <= 5; //False

//Compare number to string
//Still should avoid, never use doulbe equal, but use triple equals
10 == "10"; //True

10 === "10"; //False

const access = false;

if (access) {
  console.log("hEY MAOM IM TIK TOK FAMOUS");
} else {
  console.log("HEY I DONT HAVE ACCESS!");
}

const age = 20;
const bank = 20;

if (age >= 18 && bank > 15) {
  console.log("You have access");
} else {
  console.log("You can not enter!");
}

const age2 = 16;
const bank2 = 20;

if (age2 >= 18 || bank2 > 15) {
  console.log("You have access");
} else {
  console.log("You can not enter!");
}

const age3 = 16;
const bank3 = 100;

if (age3 != 15) {
  console.log("You are old enough, you can enter");
} else if (abank3 >= 30) {
  console.log("cool, you have enough money");
} else {
  console.log("You are either too young or have no money!");
}

const age4 = 25;

if (age4) {
  console.log("This value is the truth");
} else {
  console.log("This value is a false, lie.....like the cake.....");
}

if (true) {
  console.log("This value is the truth");
} else {
  console.log("This value is a false, lie.....like the cake.....");
}

if (false) {
  console.log("This value is the truth");
} else {
  console.log("This value is a false, lie.....like the cake.....");
}

const age5 = 0;

if (age5) {
  console.log("This value is the truth");
} else {
  console.log("This value is a false, lie.....like the cake.....");
}
