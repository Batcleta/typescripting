let canal: string = 'Gaveta'
let inscritos: number = 610234

// canal = inscritos
console.log(`Canal = ${canal}`)
/* Como o navegador lê o js e no js isso é possivel, irá
compilar sem erros e no js irá executar com erro 

para evitar que isso aconteça, é necessário habilitar no
tsconfig.json a opção " "noEmitOnError": true"

*/
// =================================================

// Declarando uma variável ja declarada em outro arquivo
// let nome:string = 'Sérgio'
// Error: Cannot redeclare block-scoped variable 'nome'
// Para dar certo é preciso mudar o scopo da declaração

{
    let nome:string = 'Sérgio'
    console.log(nome)
}
console.log(nome)

// ouuuu

nome="Aderbaldo"
console.log(nome)
