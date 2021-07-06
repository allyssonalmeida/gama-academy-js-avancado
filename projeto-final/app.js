const livros = require('./database')

//Capturar entrada da pessoa usuária
const [{id, titulo, autor, paginas, categoria, recomenda, leu}] = livros;

const readline = require('readline-sync')

const buscar = readline.question('Gostaria de buscar um livro ? S/N : ')

if(buscar.toLocaleUpperCase() == 'S'){
  console.log('Estas são as categorias disponíveis:');
  livros.map(livro => console.log(`-> ${livro.categoria} `));
  const categoria = readline.question('Qual categoria você deseja ver? : ');
  const retorno = livros.filter(livro => livro.categoria === categoria);
  console.table(retorno);
}else{
  console.log("Esse são todos os livros disponíveis");
  const acervo = livros.sort((a,b) => a.paginas - b.paginas);
  console.table(acervo)
}

