function verificarLogin(usuario, senha) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === "admin" && senha === "1234") {
                resolve("Login bem-sucedido!");
            } else {
                reject("Credenciais inválidas.");
            }
        }, 1000);
    });
}

// Testando a função com encadeamento
verificarLogin("admin", "1234")
    .then(resposta => {
        console.log(resposta);
        return "Bem-vindo ao sistema!";
    })
    .then(mensagemFinal => console.log(mensagemFinal))
    .catch(erro => console.error(erro));
