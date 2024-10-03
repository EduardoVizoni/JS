// Crie uma função para retornar um número aleatório entre 1 e 100.

function random(aleatorio) {
    let numeroAleatorio = Math.floor(Math.random() * 100);

    return numeroAleatorio;
}

console.log(random());