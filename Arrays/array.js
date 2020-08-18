//OBJECTS AND ARRAYS REFERENCE TYPE
const names = ["David", "Bubzy", "Drake"];
const newNames = names;

console.log("New Names: ", newNames);

newNames.push("Dad");

names[1] = "Jerry Rice";
names.push("Mom");

console.log("New Names: ", newNames);
console.log("Names: ", names);

let bank = 250;
let newBank = bank;

newBank = 500;

console.log("Bank: ", bank);
console.log("New Bank: ", newBank);

const tweet = {
  name: "David",
  tweets: 20,
  age: 32,
};

const newTweet = tweet;

newTweet.tweets = 21;

console.log(tweet);
