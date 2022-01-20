"use strict";
// Exercício 1 - Classe
// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0
//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }
//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }
// var moto = new Moto('Ducati')
// moto.buzinar()
// console.log(moto.velocidade)
// moto.acelerar(30)
// console.log(moto.velocidade)
class Moto {
    constructor(nome, velocidadeMaxima = 200) {
        this.nome = nome;
        this.velocidadeMaxima = velocidadeMaxima;
        this._velocidade = 0;
    }
    buzinar() {
        console.log('Toooooooooooooot!');
    }
    controleDeVelocidade(delta) {
        const novaVelocidade = this._velocidade + delta;
        const validarVelocidade = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (validarVelocidade) {
            this._velocidade = novaVelocidade;
        }
        else {
            this._velocidade = novaVelocidade > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidade;
    }
    acelerar(delta = 5) {
        return this.controleDeVelocidade(delta);
    }
    freiar(delta = 5) {
        return this.controleDeVelocidade(-delta);
    }
    get velocidade() {
        return this._velocidade;
    }
}
let moto1 = new Moto('Ducatti');
console.log(moto1.acelerar());
console.log(moto1.acelerar());
console.log(moto1.acelerar());
console.log(`get: ${moto1.velocidade}`);
console.log(`Freiar: ${moto1.freiar(15)}`);
// Exercício 2 - Herança
// var objeto2D = {
//     base: 0,
//     altura: 0
// }
// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//     return this.base * this.altura
// }
// console.log(retangulo.area())
class Objeto2D {
    constructor(_base = 0, _altura = 0) {
        this._base = _base;
        this._altura = _altura;
    }
}
class Retangulo extends Objeto2D {
    constructor(_base = 0, _altura = 0) {
        super();
    }
    area() {
        return this._base * this._altura;
    }
    set altura(altura) {
        this._altura = altura;
    }
    set base(base) {
        this._base = base;
    }
}
const ret1 = new Retangulo();
ret1.base = 5;
ret1.altura = 7;
console.log(`Área do retangulo: ${ret1.area()}`);
// // Exercício 3 - Getters & Setters
// var estagiario = {
//     _primeiroNome: ''
// }
// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)
class Estagiario {
    constructor(_primeiroNome) {
        this._primeiroNome = _primeiroNome;
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const leonardo = new Estagiario('leo');
console.log(`Estagiário: ${leonardo.primeiroNome}`);
leonardo.primeiroNome = 'le';
console.log(`Estagiário: ${leonardo.primeiroNome}`);
leonardo.primeiroNome = 'bilola';
console.log(`Estagiário: ${leonardo.primeiroNome}`);
class Estagiario2 {
    static get primeiroNome() {
        return Estagiario2._primeiroNome;
    }
    static set primeiroNome(valor) {
        if (valor.length >= 3) {
            Estagiario2._primeiroNome = valor;
        }
        else {
            Estagiario2._primeiroNome = '';
        }
    }
}
Estagiario2.primeiroNome = 'washington';
console.log(Estagiario2._primeiroNome);
Estagiario2.primeiroNome = 'wa';
console.log(Estagiario2._primeiroNome);
//# sourceMappingURL=Desafio.js.map