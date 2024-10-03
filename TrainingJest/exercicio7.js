// exercicio7.js
// Enunciado: Crie uma função que recebe um array de números e realiza as seguintes operações:
// a) Adiciona 1 a cada elemento do array.
// b) Filtra os números pares.
// c) Ordena os números em ordem decrescente.
// d) Retorna a soma dos elementos resultantes.
// Deve ser exportada a função manipularArray

function manipularArray(array) {
    let somaTotal = 0;
    const resultado = [];

    for (let i = 0; i < array.length; i++) {
        const arrayNovo = array[i] + 1;
        if (arrayNovo % 2 === 0) {
            resultado.push(arrayNovo);
        }
    }

    resultado.sort((a, b) => b - a);

    for (let i = 0; i < resultado.length; i++) {
        somaTotal += resultado[i];
    }

    return somaTotal;
}

module.exports = manipularArray;