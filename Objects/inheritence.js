function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
}

Enemy.prototype.getInfo = function () {
  console.log(this.life, this.name, this.level);
};

Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked!`);
};

Enemy.prototype.blocked = function () {
  console.log(`${this.name} has blocked!`);
};

function Dragon(life, name, level, color, spell) {
  //Keyword this is going to reference the Dragon object
  Enemy.call(this, life, name, level);
  //Define as normal
  this.color = color;
  this.spell = spell;
}

//Inherit Prototype
Dragon.prototype = Object.create(Enemy.prototype);

Dragon.prototype.fireBreath = function () {
  console.log("FIRE BREATH!!!!!");
};

const newDragon = new Dragon(100, "Drogon", 25, "green", "fire");

console.log(newDragon);
newDragon.getInfo();
