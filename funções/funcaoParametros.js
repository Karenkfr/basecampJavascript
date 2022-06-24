/*Escreva uma função, com 6 parâmetros, faça a soma de a com b, o resultado da soma diminua com c
o resultado da subtração multiplique por d e faça a divisão por e. Ao final, faça o resultado 
elevado a potencia de f (para cada operação, faça individualmente) */

function parametros (a,b,c,d,e,f) {
    const soma = a + b;
    const subtracao = soma - c;
    const multiplicacao = subtracao * d;
    const divisao = multiplicacao /e;
    const resultado = divisao ** f;
    return resultado;

}

console.log(parametros(6,2,7,11,5,3));