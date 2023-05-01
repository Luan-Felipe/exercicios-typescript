// tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Luan Felipe";
let idade: number = 28;
let altura: number = 1.81;

// tipos especiais null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

//objeto - sem previsibilidade
let produto: object = {
  name: "Luan",
  cidade: "itumbiara",
  idade: 28,
};

// objeto tipado - com previsiilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: "Tênis",
  preco: 89.99,
  unidades: 5,
};

//arrays
let dados: string[] = ["luan", "samera", "kiki"];
let dados2: Array<string> = ["luan", "samera", "kiki"];

let infos: (string | number)[] = ["Luan", 28];

//tuplas
let boleto: [string, number, number] = ["agua conta", 199.9, 326462244];

//arrays metodos
console.log(dados.indexOf("kiki"));

//datas
let aniversario: Date = new Date("2023-03-01 15:21");
console.log(aniversario.toString());

//funcoes
function addNumber(x: number, y: number): number {
  return x + y;
}

let soma: number = addNumber(4, 7);
console.log(soma);

function addToHello(name: string) {
  return `Hello ${name}`;
}

console.log(addToHello("Luan"));

function callToPhone(phone: number | string): number | string {
  return phone;
}

console.log(callToPhone("99999999"));

async function getDatabase(id:number): Promise<number |string> {
    return "999";
}

//interfaces (type x interface)
type robot =  {
    id:  number | string;
    name: string;
};

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
};

const bot: robot = {
    id:1,
    name: "pacman", 
};

const bot2: robot2 = {
    id: "1",
    name: "pacman",
    sayHello: function (): string {
        return `Hello ${this.name}`;
    }
}

console.log(bot);
console.log(bot2);

//classes
class Pessoa implements robot2 {
    id: number | string;
    name: string;

    constructor(id: string, name: string){
        this.id = id;
        this.name = name;
    }

    sayHello(): string {
        return `hello ${this.name}`;
    }
}

const p = new Pessoa( "1" , "gutsman");
console.log(p.sayHello());
