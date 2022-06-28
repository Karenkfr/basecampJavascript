/*Escreva uma função que recebe dois parâmetros (text, flag). Se flag for igual a "start" frbr retornar os 3 primeiros caracteres do parâmetro text
se a flag for igual a "end", deve retornar os 3 últimos parâmetros de text
se o parametro text tiver menos de 3 caracteres, apenas retornar o text*/

function myFunction(text, flag="start"){
    if(text.length < 3 ) {
        return text
    }
    if (flag === "start"){
        return text.slice(0,3) //slice "fatia" todas as letras da palavra texto
    }
    return text.slice(-3) //o -3 seriam os 3 últimos caracteres do texto
}

console.log(myFunction("abcdefg", "start")); //abc
console.log(myFunction("abcdefg", "end")); //efg
console.log(myFunction("ab", "end")); //ab 
console.log(myFunction("abcdefg")); //abc
