"use strict";
class character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`attack with ${this.strength} points`);
    }
}
class Magician extends character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
    magicAttack() {
        console.log(`${this.name} attacks with ${this.magicPoints} magic points`);
    }
}
const p1 = new character("Cloud Strife", 20, 25);
const p2 = new Magician("Doutor Estranho", 9, 30, 100);
p1.attack();
p2.magicAttack();
