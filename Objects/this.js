//Keyword 'this': A pointer -> it refers to an object.
const user = {
  name: "david",
  //   sayHi() {
  //     console.log(this.name);
  //   },
};

// user.sayHi();

const admin = {
  name: "admin",
};

function yell() {
  console.log(this.name.toUpperCase());
}

user.hi = yell;
admin.hi = yell;

user.hi();
admin.hi();

//Pointer using the DOM
const lists = document.querySelectorAll("li");

lists.forEach((li) => {
  li.addEventListener("click", function () {
    console.log(this);
  });
});

const user2 = {
  name: "developedbyed",
  videos: ["html", "css", "js", "react"],
  greet() {
    ///CAN DO THIS WAY
    // let self = this;

    //OR ARROW FUNCTION WAY
    console.log(`Hello there ${this.name}`);
    //ADD FUNCTION
    const getVideos = () => {
      console.log(`You currently have ${this.videos.length} videos`);
    };
    getVideos();
    // this.videos.forEach((video) => {
    //   console.log(this.name);
    // });
  },
};

user2.greet();
