/*Escreva uma função que recebe dois parâmetros (fullname, flag)
se a flag for igual a "firstname", deve retornar apenas a primeira palavra do parâmetros fullname
se a flag for igual a "lastname", deve retornar todo o texto, exceto a primeira palavra do parâmetro fullname
se o parâmetro flag for vazio ou fullname, conter apenas uma palavra, retornar o conteúdo de fullname */

function myFunction(fullname,flag= "") {
    const parts = fullname.split(" ")
    if (flag.length == 0 || parts.length <= 1) {
        return fullname
    } else if ( flag === "firstname") {
        return parts [0]
    }
    return parts.slice(1).join(" ")
 }

 console.log(myFunction("John Williams Smith", "firstname"));
 console.log(myFunction("John Williams Smith", "lastname"));
 console.log(myFunction("John Williams Smith"));
 console.log(myFunction("John", "lastname"));