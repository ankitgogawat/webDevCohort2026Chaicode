class Cricketer {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.matchesPlayed = 0;
    this.stamina = 100;
  }

  introduce() {
    return `${this.name} the ${this.role} | matchesPlayed: ${this.matchesPlayed} | stamina: ${this.stamina} `;
  }
}

const player1 = new Cricketer("Virat", "Batsman");
const player2 = new Cricketer("Bumrah", "Bowler");

console.log(player1.hasOwnProperty("name"));
console.log(typeof Cricketer);

class Debutant {
  constructor(name) {
    this.name = name;
    this.walkOut = () => `${this.name} walks out to bat for the first time`;
  }
}

const debutant1 = new Debutant("Shubman");
const somethingFromLastClass = debutant1.walkOut;

const debutant2 = new Debutant("Yashasvi");
console.log(debutant1.walkOut === debutant2.walkOut);

// console.log(somethingFromLastClass());

// Arrow → “this” is fixed (lexical this)
// Normal function → “this” depends on call-site

class Debutant {
  constructor(name) {
    this.name = name;

    // Arrow function
    this.walkOutArrow = () =>
      `${this.name} walks out to bat for the first time`;

    // Normal function
    this.walkOutNormal = function () {
      return `${this.name} walks out to bat for the first time`;
    };
  }
}

const debutant = new Debutant("Shubman");

const arrowFn = debutant.walkOutArrow;
const normalFn = debutant.walkOutNormal;

console.log(arrowFn()); // Shubman walks out to bat for the first time
console.log(normalFn()); // undefined walks out to bat for the first time
