
interface SaudarComOlá{
    nome: string
    idade: number
    [prop:string]:any // usando quando nao há definição de propriedade ou tipo
    saudar(sobrenome:string):void
}

namespace saudacao{
    export const saudarComOla = (pessoa: SaudarComOlá): void => {
        if(pessoa.idade >= 18){

            console.log(`Olá ${pessoa.nome} Bem vindo ao pornhub premium`)
            console.log(pessoa)
        }else{
            console.log('perdão mas a putaria não é pra vc')
        }
    }

    export const mudarNome = (pessoa: SaudarComOlá):{} => {
        return pessoa.nome = 'Joana'
    }
}

const pessoa: SaudarComOlá = {
    nome: 'João',
    idade: 27,

    saudar(sobrenome: string){
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
}

// saudacao.saudarComOla(pessoa)
// saudacao.mudarNome(pessoa)
// saudacao.saudarComOla({...pessoa, altura: 256})
// pessoa.saudar('Skywalker')




// Usando classes


class Cliente implements SaudarComOlá{
    // nome: string = ''
    // idade: number = 0

    private ultimaCompra = new Date().toLocaleDateString('pt-BR')

    constructor(public nome:string, public idade:number){}

    saudar(sobrenome:string) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome} e tenho ${this.idade} anos`)
    }

    ultimacompra():void{
        console.log(`a ultima compra foi em: ${this.ultimaCompra}`)
    }
}

const meuCliente = new Cliente('washington', 23)

saudacao.saudarComOla(meuCliente)
meuCliente.saudar('Skywalker')
meuCliente.ultimacompra()

// Interface função

interface funcaoCalculo {
    (a:number, b:number):number
}

let potencia:funcaoCalculo = (base, exp) => 
    // Math.pow(base, exp)
    Array(exp).fill(base).reduce((acc, att) => acc * att)

    console.log(potencia(10, 3))


    // Herança de interfaces

    interface A {
        a(): void 
    }

    interface B {
        b(): void 
    }

    interface ABC extends A, B {
        c(): void 
    }

    class RealA implements A {
        a(): void {}
    }

    class RealAB implements A, B {
        a(): void {}
        b(): void {}
    }

    class RealABC implements ABC {
        a(): void {}
        b(): void {}
        c(): void {}
    }


    abstract class AbstractABD implements A , B {
        a(): void {}
        b(): void {}
        abstract d(): void

    }


    // Interface em protótipo

    interface Object {
        log(): void 
    }

    Object.prototype.log = function() {
        console.log(this.toString())
    }

    const x = 5
    const y = 7
    const z = 3

    x.log()
    y.log()
    z.log()