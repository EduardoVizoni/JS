// exercicio6.js
// Enunciado: Crie uma função que recebe um array de números e retorna um novo array com os números multiplicados por 2 e ordenados em ordem crescente.
// Deve ser exportada a função multiplicarEOrdenar

function multiplicarEOrdenar(array) {
    let novoArray = [];

    for (let i = 0; i < array.length; i++) {
        novoArray[i] = array[i] * 2;
    }

    return novoArray.sort((a, b) => a - b);
}

module.exports = multiplicarEOrdenar;