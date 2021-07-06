const pessoa = {
  nome: 'Allysson',
  idade: '29',
  cidade: 'Seabra',
  estado: 'Bahia'
}

//Notação de ponto
console.log(pessoa.nome);

//Notação de colchetes
console.log(pessoa['idade']);

//Desestruturar objetos
const {nome, idade, cidade} = pessoa;

console.log(nome);
console.log(idade);
console.log(cidade);