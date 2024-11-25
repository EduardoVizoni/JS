const promessa = new Promise((resolve, reject) => {
    const sucesso = Math.random() > 0.5;
  
    setTimeout(() => {
      if (sucesso) {
        resolve("Dados carregados com sucesso!");
      } else {
        reject("Falha ao carregar os dados.");
      }
    }, 2000);
  });
  
  promessa
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((erro) => {
      console.error(erro);
    })
    .finally(() => {
      console.log("Processo finalizado.");
    });