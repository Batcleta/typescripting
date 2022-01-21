"use strict";
var saudacao;
(function (saudacao) {
    saudacao.saudarComOla = (pessoa) => {
        if (pessoa.idade >= 18) {
            console.log(`Olá ${pessoa.nome} Bem vindo ao pornhub premium`);
            console.log(pessoa);
        }
        else {
            console.log('perdão mas a putaria não é pra vc');
        }
    };
    saudacao.mudarNome = (pessoa) => {
        return pessoa.nome = 'Joana';
    };
})(saudacao || (saudacao = {}));
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
};
// saudacao.saudarComOla(pessoa)
// saudacao.mudarNome(pessoa)
// saudacao.saudarComOla({...pessoa, altura: 256})
// pessoa.saudar('Skywalker')
// Usando classes
class Cliente {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        // nome: string = ''
        // idade: number = 0
        this.ultimaCompra = new Date().toLocaleDateString('pt-BR');
    }
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome} e tenho ${this.idade} anos`);
    }
    ultimacompra() {
        console.log(`a ultima compra foi em: ${this.ultimaCompra}`);
    }
}
const meuCliente = new Cliente('washington', 23);
saudacao.saudarComOla(meuCliente);
meuCliente.saudar('Skywalker');
meuCliente.ultimacompra();
let potencia = (base, exp) => 
// Math.pow(base, exp)
Array(exp).fill(base).reduce((acc, att) => acc * att);
console.log(potencia(10, 3));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstractABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 5;
const y = 7;
const z = 3;
x.log();
y.log();
z.log();
//# sourceMappingURL=Interfaces.js.map