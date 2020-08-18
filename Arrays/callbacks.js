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
  return video;
});

newVideos.push("HEYYYYY!");

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
