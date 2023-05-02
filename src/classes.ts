//classes

/*
    data modifiers
    public
    private
    protected
*/
class character {
    protected name?: string;
    readonly strength: number;
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

//Character: superclass
//Magician:  subclass
class Magician extends character {
    magicPoints: number;
    constructor(name: string, strength: number, skill: number, magicPoints: number){
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }

    magicAttack(): void{
        console.log(`${this.name} attacks with ${this.magicPoints} magic points`);
    }
}

const p1 = new character("Cloud Strife", 20, 25);
const p2 = new Magician("Doutor Estranho", 9, 30, 100);
p1.attack();
p2.magicAttack();