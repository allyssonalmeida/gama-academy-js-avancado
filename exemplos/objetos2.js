const filmes = [
  {
    id: 1,
    titulo: 'Senhor dos Anéis - A Sociedade do Anel',
    descricao: 'Conheça Frodo, um jovem Hobbit cujo destino pode salvar o mundo...',
    duracao: 180
  },
  {
    id: 2,
    titulo: 'Senhor dos Anéis - As Duas Torres',
    descricao: 'Frodo tenta seguir sem seus amigos, será que ele conseguirá?',
    duracao: 180
  },
  {
    id: 3,
    titulo: 'Senhor dos Anéis - O Retorno do Rei',
    descricao: 'Frodo se aproxima cada vez mais de Mordor...',
    duracao: 180
  },
];

const [{id, titulo, descricao, duracao}] = filmes;

filmes.map(filme => console.log(filme.descricao));