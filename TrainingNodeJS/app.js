const biblioteca = require('./biblioteca');

biblioteca.adicionarLivro("O Segredo", "Rhonda Byrne", 2006, "Autoajuda");
biblioteca.adicionarLivro("O Alquimista", "Paulo Coelho", 1988, "Ficção");

const livroBuscadoPorTitulo = biblioteca.buscarLivroPorTitulo("O Segredo");
console.log(livroBuscadoPorTitulo);

const livroBuscadoPorAutor = biblioteca.buscarLivroPorAutor("Paulo Coelho");
console.log(livroBuscadoPorAutor);

biblioteca.editarLivro(1, { autor: "Rhonda Byrne", ano: 2006 });
console.log(biblioteca.listarLivros());

biblioteca.alterarDisponibilidade(1, false);
console.log(biblioteca.listarLivros());

biblioteca.removerLivro(2);
console.log(biblioteca.listarLivros());