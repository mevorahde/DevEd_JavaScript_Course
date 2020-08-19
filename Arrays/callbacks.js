const videos = [
  "how to javascript",
  "html tutorial",
  "play sports",
  "learning the piano",
  "html basics",
  "css",
  "java",
  "programming",
  "ui/ux",
];

// // videos.push("good morning");
// // console.log(videos);

/////////////////////
//CALL BACK FUNCTION
////////////////////

// videos.forEach(function (video) {
//   console.log("run");
//   console.log(video);
// });

// //HIGHER ORDER FUNCTION
// function repeater(fn) {
//   fn();
//   fn();
//   fn();
// }

// function sayHello() {
//   console.log("Hello There!");
// }

// repeater(sayHello);

/////////////////
//MAP
////////////////

const newVideos = videos.map(function (video) {
  //   return video.toUpperCase();
  // return video;

  //CAN DO THIS OR......

  // if (video.length < 10) {
  //   return video;
  // } else {
  //   return "nope";
  // }

  //CAN DO THIS.....
  return video.length < 10 ? video : "nope";
});

// newVideos.push("HEYYYYY!");

console.log("Videos: ", videos);
console.log("New Videos: ", newVideos);

/////////////////
//FIND
////////////////
const searchTutorial = videos.find(function (video) {
  return video.includes("html");
});

console.log("Search Tutorial: ", searchTutorial);

/////////////////
//FILTER
////////////////
const shortSearch = videos.filter(function (video) {
  return video.length < 10;
});

console.log(shortSearch);

const games = [
  { title: "Mass Effect", rating: 9.5 },
  { title: "League of Legends", rating: 5 },
  { title: ":ast of Us", rating: 10 },
  { title: "God of War", rating: 10 },
  { title: "WWE 2k20", rating: 4 },
];

const highRating = games.filter(function (game) {
  return game.rating > 9;
});

// console.log(highRating);

/////////////////
//SOME and EVERY
////////////////
const checkRating = games.every(function (game) {
  return game.rating > 8;
});

console.log("Check Rating: ", checkRating);

const someRating = games.some(function (game) {
  return game.rating > 8;
});

console.log("Some Rating: ", someRating);

/////////////////
//ARROW FUNCTIONS
////////////////

//INSTEAD OF THIS.....
const newVideos2 = videos.map(function (v) {
  return v.length < 10 ? v : "nope";
});

console.log("New Videos: ", newVideos2);

//CAN DO THIS....
// const arrowVideos = videos.map((v2) => {
//   return v2.length < 10 ? v2 : "nope";
// });

//OR THIS....
const arrowVideos = videos.map((v2) => (v2.length < 10 ? v2 : "nope"));

console.log("Arrow Videos: ", arrowVideos);

// const arrowVideos2 = videos.map((v3) => v3 + "hey");
const arrowVideos2 = videos.map((v3) => v3.toUpperCase());

console.log("Arrow Videos2: ", arrowVideos2);

/////////////////
//SORT
////////////////

const items = ["Banana", "Orange", "Apple", "Mango"];
const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

//If return is negative, a is sorted before b
//If postive, b is sorted before a
//If they are the same, or 0, then nothing happens
// ratings.sort(function (a, b) {
//   //ASC
//   return a - b;
//   //DESC
//   // return b - a;
// });

//ARROW FUNCTION OF ABOVE
// ratings.sort((a, b) => a - b);

// console.log("RATINGS: ", ratings);

// games.sort((a, b) => a.rating - b.rating);

// console.log("GAME RATINGS: ", games);

/////////////////
//COPiES OF ARRAYS
////////////////

const descRatings = [...ratings];
descRatings.sort((a, b) => b - a);

const ascRatings = [...ratings];
ascRatings.sort((a, b) => a - b);

console.log("descRatings: ", descRatings);
console.log("ascRatings: ", ascRatings);
console.log("RATINGS: ", ratings);

const name = "developedbyed";

const letters = name.split("");
console.log(letters);

const names = ["David", "you"];
const otherNames = ["John", "Bon", "Jovi"];

//CAN DO THIS....

// const allNames = names.concat(otherNames);
// console.log(allNames);
// console.log(names);

//OR THIS...

const allNames = [...names, ...otherNames];
console.log(allNames);
console.log(names);
