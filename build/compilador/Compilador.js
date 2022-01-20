"use strict";
let canal = 'Gaveta';
let inscritos = 610234;
// canal = inscritos
console.log(`Canal = ${canal}`);
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
    let nome = 'Sérgio';
    console.log(nome);
}
console.log(nome);
// ouuuu
nome = "Aderbaldo";
console.log(nome);
// "sourceMap": true
// "noImplicitAny": true
function soma(a, b) {
    return a + b;
}
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
// "strictNullChecks": true,  retorna um erro quando verifica um nulo indesejado
function saudar(isManha) {
    let saudacao;
    if (isManha)
        saudacao = 'Bom dia';
    else
        saudacao = 'Boa vida';
    return saudacao;
}
console.log(saudar(true));
// "noUnusedLocals": true,          // reclama quando nao usa uma variável no código
// "noUnusedParameters": true,      // reclama quando um parametro nao é utilizado
// "outDir": "./" - auto explicativo
//# sourceMappingURL=Compilador.js.map