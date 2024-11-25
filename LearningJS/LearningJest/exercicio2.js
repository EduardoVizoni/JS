// exercicio2.js
// Enunciado: Crie uma função que recebe um array de números e retorna a soma de todos os elementos.
// Deve ser exportada a função somaArray

function somaArray(array) {
    let soma = 0;
    for (let num of array) {
        soma += num;
    }
    return soma;
}

module.exports = somaArray;