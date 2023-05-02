"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let ligado = false;
let nome = "Luan Felipe";
let idade = 28;
let altura = 1.81;
let nulo = null;
let indefinido = undefined;
let retorno;
let retornoView = false;
let produto = {
    name: "Luan",
    cidade: "itumbiara",
    idade: 28,
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};
let dados = ["luan", "samera", "kiki"];
let dados2 = ["luan", "samera", "kiki"];
let infos = ["Luan", 28];
let boleto = ["agua conta", 199.9, 326462244];
console.log(dados.indexOf("kiki"));
let aniversario = new Date("2023-03-01 15:21");
console.log(aniversario.toString());
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log(soma);
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello("Luan"));
function callToPhone(phone) {
    return phone;
}
console.log(callToPhone("99999999"));
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "999";
    });
}
;
const bot = {
    id: 1,
    name: "pacman",
};
const bot2 = {
    id: "1",
    name: "pacman",
    sayHello: function () {
        return `Hello ${this.name}`;
    }
};
console.log(bot);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello ${this.name}`;
    }
}
const p = new Pessoa("1", "gutsman");
console.log(p.sayHello());
