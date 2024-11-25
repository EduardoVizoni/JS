function carregarDados() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Dados carregados!");
      }, 2000);
    });
  }
  
  carregarDados()
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((erro) => {
      console.error(erro);
    });