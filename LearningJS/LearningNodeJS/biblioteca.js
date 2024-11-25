let livros = [];

module.exports = {
    adicionarLivro,
    listarLivros,
    buscarLivroPorTitulo,
    editarLivro,
    alterarDisponibilidade,
    removerLivro,
    buscarLivroPorAutor,

};

function adicionarLivro(titulo, autor, ano, genero) {
    const novoLivro = {
        id: livros.length + 1,
        titulo,
        autor,
        ano,
        genero,
        disponibilidade: true
    };
    livros.push(novoLivro);
}

function listarLivros() {
    return livros;
}


function buscarLivroPorTitulo(titulo) {
    return livros.filter(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
}


function editarLivro(id, novasInformacoes) {
    const livro = livros.find(l => l.id === id);
    if (livro) {
        Object.assign(livro, novasInformacoes);
    } else {
        console.log('Livro não encontrado.');
    }
}

function alterarDisponibilidade(id, disponivel) {
    const livro = livros.find(l => l.id === id);
    if (livro) {
        livro.disponibilidade = disponivel;
    } else {
        console.log('Livro não encontrado.');
    }
}

function removerLivro(id) {
    const index = livros.findIndex(l => l.id === id);
    if (index !== -1) {
        livros.splice(index, 1);
    } else {
        console.log('Livro não encontrado.');
    }
}

function buscarLivroPorAutor(autor) {
    return livros.filter(livro => livro.autor.toLowerCase() === autor.toLowerCase());
}