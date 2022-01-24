"use strict";
const echo = (objeto) => objeto;
// console.log(echo('joão').length)
// console.log(echo(27))
// console.log(echo({nome:'joão', idade: 27}))
// console.log('--------Usando Genérics------------')
// // Usando Genérics
// // Passagem de tipo como parâmetro. Ele é definido no genéric e passado para o resto
// const echoMelhorado = <Tipo>(objeto: Tipo):Tipo => objeto
// // Força a mudança dos parametros ( inferência de tipo 'joão':string)
// console.log(echoMelhorado('joão').length)
// // Força a mudança dos parametros ( passagem de tipo como parâmetro <number>)
// console.log(echoMelhorado<number>(27))
// console.log(echoMelhorado({nome:'joão', idade: 27}))
// console.log('---------API-------------')
// // Genérics disponíveis na api
// const avaliações: Array<number> = [10, 9.3, 7.7]
// avaliações.push(8.4)
// // avaliações.push('5.5')
// console.log( avaliações)
// console.log('-----------exemplificando genérics--------------')
// // Array
// const imprimir = <T>(args: T[]) => args.forEach(element => {
//     console.log(element)
// });
// imprimir([1,2,3])
// imprimir<number>([1,2,3])
// imprimir<string>(["ana","bia","carlos"])
// imprimir<{nome: string, idade: number}>([{nome: 'washington', idade: 31}, {nome: 'arthur', idade: 32}])
// // Usando interface
// console.log('----------Usando interface----------------')
// interface Aluno{nome: string, idade: number}
// imprimir<Aluno>([{nome: 'washington', idade: 31}, {nome: 'arthur', idade: 32}])
// // Tipo genérico
// console.log('-----------Tipo Genérico------------')
// type Echo = <T>(data:T) => T
// const chamarEcho: Echo= echoMelhorado
// console.log(chamarEcho<string>('Alguma coisa'))
// // chamarEcho(string):string => echoMelhorado(string):string
// console.log('-----------Classe com genérics------------')
// abstract class OperacaoBinaria<T, R> {
//     constructor(public operando1: T, public operando2:T){}
//    abstract executar(): R
// }
// // console.log(new OperacaoBinaria('bom ', 'dia').executar())
// // console.log(new OperacaoBinaria(3, 7).executar())
// // console.log(new OperacaoBinaria(3, ' opa').executar())
// // console.log(new OperacaoBinaria({}, {}).executar())
// class SomaBinária extends OperacaoBinaria<number, number>{
//     executar(): number {
//         return this.operando1 + this.operando2
//     }
// }
// // console.log(new SomaBinária('1', '2').executar())
// console.log(new SomaBinária(1, 2).executar())
// console.log('-----------Diferença entre datas------------')
// interface DataInterface{
//     dia: number
//     mes: number
//     ano: number
// }
// class Data{
//     constructor(public dia: number, public mes: number, public ano: number){
//         return {dia, mes, ano}
//     }
// }
// class datas extends OperacaoBinaria < DataInterface, string> {
//     getTime(data: DataInterface): number{
//         let{dia, mes, ano} = data
//         return new Date(`${mes}/${dia}/${ano}`).getTime()
//     }
//     executar(): string {
//         let d1 = this.getTime(this.operando1)
//         let d2 = this.getTime(this.operando2)
//         let diferença = Math.abs(d1 - d2)
//         let dia = 1000*60*60*24
//         return `${Math.ceil(diferença / dia)} dia(s)`
//     }
// }
// const d3 = new Data(1,2,2020)
// const d1 = {dia: 1, mes: 2, ano: 2020}
// const d2 = {dia: 5, mes: 2, ano: 2020}
// console.log(new datas(d3, d2).executar())
// // Desafio classe fila
// // Atributo: fila ( Array )
// // Método: entrar, proximo, imprimir
// interface PessoasFIla{nome: string, idade: number, caso: string}
// // const fila: PessoasFIla[] = [
// //     {nome: 'Washington', idade: 31, caso: 'Problemas de saúde'},
// //     {nome: 'Dielma', idade: 28, caso: 'Pedra no rin'},
// //     {nome: 'Arthur', idade: 31, caso: 'Aumento peniano'},
// //     {nome: 'Elias', idade: 29, caso: 'Troca de sexo'},
// //     {nome: 'Francielle', idade: 26, caso: 'Cirurgia bariátrica'},
// //     {nome: 'Rivanio', idade: 40, caso: 'Objeto não identificado no anus'},
// //     {nome: 'Cicero', idade: 22, caso: 'Esporrou no dreamcast'},
// // ]
// class fila <T>{
//     // private fila: T[]
//     constructor(private fila: T[]){}
//     // constructor(...args:T[]){this.fila = args}
//     mostrarPessoasNaFila(): T[] | string {
//         if ( this.fila[0]){
//             return this.fila
//         } else{
//             return "A fila está vazia"
//         }
//     }
//     entrarNaFila(novaPessoa: T): void{
//         this.fila.push(novaPessoa)
//     }
//     proximoDaFila():void{
//         this.fila.shift()
//     }
// }
// const Ama = new fila<PessoasFIla>([{nome:'washingtn', idade:27, caso: 'perna quebradas'}])
// Ama.entrarNaFila({nome: 'Dielma', idade: 28, caso: 'Pedra no rin'})
// Ama.entrarNaFila({nome: 'Arthur', idade: 31, caso: 'Aumento peniano'})
// Ama.entrarNaFila({nome: 'Elias', idade: 29, caso: 'Troca de sexo'})
// Ama.entrarNaFila({nome: 'Francielle', idade: 26, caso: 'Cirurgia bariátrica'})
// console.log(Ama.mostrarPessoasNaFila())
// Ama.proximoDaFila()
// console.log(Ama.mostrarPessoasNaFila())
// Ama.proximoDaFila()
// console.log(Ama.mostrarPessoasNaFila())
// Ama.proximoDaFila()
// console.log(Ama.mostrarPessoasNaFila())
// Ama.proximoDaFila()
// console.log(Ama.mostrarPessoasNaFila())
// Ama.proximoDaFila()
// console.log(Ama.mostrarPessoasNaFila())
// Ama.proximoDaFila()
// console.log(Ama.mostrarPessoasNaFila())
//# sourceMappingURL=tempCodeRunnerFile.js.map