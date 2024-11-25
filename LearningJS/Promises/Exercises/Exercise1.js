function downloadArquivo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.2; // Simula erro com 20% de chance
            if (sucesso) {
                resolve("Download concluído!");
            } else {
                reject("Erro no download.");
            }
        }, 3000);
    });
}

// Testando a Promise
downloadArquivo()
    .then(mensagem => console.log(mensagem))
    .catch(erro => console.error(erro));
