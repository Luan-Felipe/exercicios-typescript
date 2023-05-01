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
const p1 = new character("Cloud Strife", 20, 25);
p1.attack();
