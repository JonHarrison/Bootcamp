function Character(name, profession, age, strength, hitPoints) {
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;
}

Character.prototype.PrintStats = function() {
    console.log(
`name : ${this.name}
profession : ${this.profession}
age : ${this.age}
strength : ${this.strength}
hit points : ${this.hitPoints}\n`);
}

Character.prototype.IsAlive = function() {
    if (this.hitPoints > 0) {
        console.log(`${this.name} is alive`);
        return true;
    }
    else {
        console.log(`${this.name} is dead`);
        return false;
    }
}

Character.prototype.Attack = function(opponent) {
  console.log(`${this.name} attacks ${opponent.name}\n`);
  opponent.hitPoints -= this.strength;
}

Character.prototype.LevelUp = function() {
    this.age +=1;
    this.strength +=5;
    this.hitPoints += 25;
}

const thor = new Character('thor','god','999','1000','50');
const batman = new Character('batman','saviour of Gotham','42','20','30');
const wonderWoman = new Character('wonder woman', 'superhero', '0','500','20');

thor.PrintStats();
batman.PrintStats();

thor.Attack(batman);

thor.PrintStats();
batman.PrintStats();

batman.IsAlive();