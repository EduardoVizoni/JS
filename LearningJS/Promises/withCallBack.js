function carregarDados(callback) {
    setTimeout(() => {
      callback(null, "Dados carregados!");
    }, 2000);
  }
  
  carregarDados((erro, resultado) => {
    if (erro) {
      console.error(erro);
    } else {
      console.log(resultado);
    }
  });