//classes
class character {
    name: string;
    strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number){
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack() : void{
        console.log(`attack with ${this.strength} points`);
    }
}

const p1 = new character("Cloud Strife", 20, 25);
p1.attack();