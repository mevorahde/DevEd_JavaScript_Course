const names = ["Dev Ed", "Barbie", "Logic", "Mf Doom", "Tool"];

//FOR EACH
//SPECIFICALLY FOR ARRAYS
// Generally slower
names.forEach(function (name, index) {
  console.log(name, index);

  //This will break as it's inside a function.
  //   if (name === "Logic") {
  //     console.log("Stop this madness!");
  //     break;
  //   }
  //   console.log(name);
});

// for (let name of names) {
//   //   console.log(name);
//   //   console.log(names.indexOf(name));
//   if (name === "Logic") {
//     console.log("Stop this madness!");
//     break;
//   }
//   console.log(name);
// }
