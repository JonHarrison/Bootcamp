class Character {

  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }

  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if (this.hitPoints > 0) {
      console.log(`${this.name} is still alive!`);
      console.log('\n-------------\n');
      return true;
    }
    console.log(`${this.name} has died!`);
    return false;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    console.log(`${opponent.name} attacks with hit points ${opponent.hitPoints}`);
    // Then, change the opponent's hitPoints to reflect this
    opponent.hitPoints -= this.strength;
  }
}

// Create two unique characters using the "character" class
const warrior = new Character('Crusher', 10, 75);
const rogue = new Character('Dodger', 20, 50);

warrior.printStats();
rogue.printStats();

// Create an interval that alternates attacks every 2000 milliseconds
let attacker = 'warrior';
let interval = setInterval(function () {
  switch (attacker) {
    case 'warrior':
      rogue.attack(warrior);
      attacker = 'rogue';
      break;
    case 'rogue':
      warrior.attack(rogue);
      attacker = 'warrior';
      break;
  }
  warrior.printStats();
  rogue.printStats();
  if (!warrior.isAlive() || !rogue.isAlive()) {
    clearInterval(interval);
    return;
  }
}, 2000);
