// Enunciado: Crie uma função que calcula o fatorial de um número.
// Deve ser exportada a função fatorial

function fatorial(a) {
    if (a < 0) {
        return undefined;
    }
    if (a === 0) {
        return 1;
    }
    
    let resultado = 1;
    for (let i = 1; i <= a; i++) {
        resultado *= i;
    }
    return resultado;
}

module.exports = fatorial;