// class Data{
//      dia: number
//      mes: number
//      ano: Number 

//     public constructor( dia: number = 1, mes: number = 1, ano: Number = 1970){
//         this.dia = dia
//         this.mes = mes
//         this.ano = ano
//     }
// }

// const aniversario = new Data(16,11,1990)
// aniversario.dia = 15
// console.log(aniversario.dia)
// console.log(aniversario)

// const casamento = new Data()
// casamento.ano = 2017
// console.log(casamento)

// // simplificado

// class DataEsperta{

//     public constructor( public dia: number = 1, public mes: number = 1, public ano: Number = 1970){

//     }
// }

// const aniversario2 = new DataEsperta(16,11,1990)
// aniversario2.dia = 17
// console.log(aniversario2.dia)
// console.log(aniversario2)

// const casamento2 = new Data()
// casamento2.ano = 2018
// console.log(casamento2)


// // Desafio Produto

// // Atributos: nome, preço e desconto
// // Criar um construtor
// // Obs: O valor do desconto é opcional ( valor padrão 0)
// // Obs Criar dois produtos: passando 2 e 3 parametros


// class Produto{
//     constructor(public nome:string, public preco: number, public desconto:number = 0 ){}

//     public precoComDesconto():number {
//         // return this.preco - (this.preco * this.desconto)
//         return this.preco * (1 - this.desconto)
//     }

//     public resumo():string{
//         return `${this.nome} custa R$ ${this.precoComDesconto()} com desconto de ${this.desconto * 100}% ` 
//     }
// }

// const produto1 = new Produto('Lapis maped', 2.90)
// produto1.desconto = 0.2
// const produto2 = new Produto('Caneta maped', 4.90, 0.5)

// console.log(produto1.resumo())
// console.log(produto2.resumo())


// class Carro{
//     private velocidadeAtual: number = 0

//     constructor(public marca: string, public modelo:string, private velocidadeMaxima: number = 200 ){}


//     protected alterarVelocidade(delta:number):number{
//         const novaVelocidade = this.velocidadeAtual + delta
//         const velocidadeValida = novaVelocidade >=0 && novaVelocidade <= this.velocidadeMaxima

//         if (velocidadeValida){
//             this.velocidadeAtual = novaVelocidade
//         }else{
//             this.velocidadeAtual = novaVelocidade > 0? this.velocidadeMaxima: 0
//         }
//         return this.velocidadeAtual
//     }

//     public acelerar(delta: number):number{
//         return this.alterarVelocidade(delta)
//     }

//     public freiar(delta:number):number{
//         return this.alterarVelocidade(-delta)
//     }

// }

// const Versa = new Carro("Nissan", "versa")
// Versa.acelerar(100)
// console.log(`Sentra está a ${Versa.acelerar(50)} Kmh`)
// Versa.freiar(150)

// const Sentra =  new Carro("Nissan", 'sentra', 190)

// Array(50).fill(0).forEach(() => Sentra.acelerar(4))

// Sentra.freiar(50)
// console.log(`Sentra está a ${Sentra.freiar(50)} Kmh`)


// // Herança

// class Ferrari extends Carro {

//     constructor(modelo:string,  velocidadeMaxima: number){
//         super('ferrari', modelo, velocidadeMaxima)
//     }
//     public acelerar():number{
//         return this.alterarVelocidade(30)
//     }

//     public freiar():number{
//         return this.alterarVelocidade(-30)
//     }
// }

// const f40 = new Ferrari('f40', 324)
// console.log(`${f40.marca} ${f40.modelo}`)
// console.log(f40.acelerar())
// console.log(f40.freiar())

// const f50 = new Ferrari('f50', 324)
// console.log(`${f50.marca} ${f50.modelo}`)
// console.log(f50.acelerar())
// console.log(f50.freiar())



// // getters and setters

// class Pessoa {
//     private _idade: number = 0

//     get idade(): number {
//         return this._idade
//     }

//     set idade(valor: number) {
//        if(valor >= 0 && valor <= 120){
//            this._idade = valor
//        }
//     }
// }

// const pessoaEu = new Pessoa()
// pessoaEu.idade = 20
// console.log(`Idade: ${pessoaEu.idade}`)


//  Atributos e métodos estáticos

class Matemática {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return this.PI * raio * raio
    }
}

const m1 = new Matemática()

// console.log(m1.areaCirc(4))
console.log(Matemática.areaCirc(10))


// Classe abstrata - ler mais sobre
abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    get Resultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

let c1: Calculo = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.Resultado)

c1 = new Multiplicacao()
c1.executar(2, 3, 4, 5)
console.log(c1.Resultado)


// Construtor singleton - ler mais sobre

class Unico{
    private static instance: Unico = new Unico
    private constructor() {}

    static getInstance(): Unico {
        return Unico.instance
    }
    agora(){
        return new Date
    }
}

console.log((Unico.getInstance().agora()))