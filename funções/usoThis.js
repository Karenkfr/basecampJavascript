// métodos call e apply (uso do this)

const pessoa1 = {
    nome: 'Maria',
    idade: 30

}
const pessoa2 = {
    nome: 'Jorge',
    idade: 27

}
const pessoa3 = {
    nome: 'Neusa',
    idade: 15

}
const pessoa4 = {
    nome: 'José',
    idade: 4

}


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa2,30));
console.log(calculaIdade.call(pessoa4,7));
console.log(calculaIdade.call(pessoa1,3));
console.log(calculaIdade.call(pessoa3,17));