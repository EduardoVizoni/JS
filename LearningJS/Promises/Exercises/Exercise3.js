function realizarPedido() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.3; // Simula falha com 30% de chance
            if (sucesso) {
                resolve("Pedido aprovado e enviado!");
            } else {
                reject("Erro no pedido.");
            }
        }, 2000);
    });
}

// Testando a Promise
realizarPedido()
    .then(mensagem => console.log(mensagem))
    .catch(erro => console.error(erro));
