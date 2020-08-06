// const text = "banana";
// // const text = "kiwi";
// let fruitNumber = 0;

// switch (text) {
//   case "banana":
//     console.log("Wow, I love bananas too");
//     fruitNumber = 1;
//     console.log(fruitNumber);
//     break;
//   case "apple":
//     console.log(`I don't like apples, you are crazy.`);
//     fruitNumber = 2;
//     console.log(fruitNumber);
//     break;
//   case "avocado":
//     console.log("What fruit is dis?");
//     fruitNumber = 3;
//     console.log(fruitNumber);
//     break;
//   default:
//     console.log("What fruit is that?");
//     break;
// }

//Mini Game
let userInput = prompt("Tell me a fruit");
let convertedValue = userInput.toLowerCase();

switch (convertedValue) {
  case "kiwi":
    alert("Kiwi is the first food invented by the ocean boys.");
    break;
  case "banana":
    alert("My girlfriend bout 12 bananas for no reason.");
    break;
  case "apple":
    alert(
      "Depending on which apple you buy, you can go bankrupt or eat too much sugar."
    );
    break;
  default:
    alert("That fruit is unknown to me.");
    break;
}
