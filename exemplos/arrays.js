const alunasGama = ['Paula','Clara','Maria','Simaria','Michele'];
//Acessando informações do Array
console.log(alunasGama[3]);

//Operador spread (...)
const alunasXp = [...alunasGama, 'Joana'];
console.log(alunasXp);

//Métodos de iteração - MAP
alunasXp.map( aluna => console.log(aluna));

//Filter
const numeros = [20,10,11,23,56,65];
const impares = numeros.filter(numero => numero%2 != 0);
const pares = numeros.filter(numero => numero%2 == 0);

console.log(`Numeros ${numeros}`)
console.log(`Numeros Pares ${pares}`)
console.log(`Numeros Impares ${impares}`)

//Ordenação com Sort
const numerosCrescente = numeros.sort();
console.log(numerosCrescente);
const numerosDecrescente = numeros.sort( (a,b) => b-a);
console.log(numerosDecrescente);

//Reduce  - Reduz array a um resultado de uma operação matemática

const numbers = [1, 34, 35];

const soma = numbers.reduce((valorAnterior, valorAtual) => {
  return valorAnterior + valorAtual
}, 0);

console.log(soma);

