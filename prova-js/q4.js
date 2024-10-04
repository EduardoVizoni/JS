/**
 * Questão 4: Soma dos termos pares da sequência de Fibonacci
 *
 * Implemente uma função chamada somaFibonacciPares que não recebe parâmetros.
 * Esta função deve calcular a soma dos termos pares da sequência de Fibonacci
 * cujos valores não excedam cinquenta mil.
 *
 * Requisitos:
 * 1. A sequência de Fibonacci deve começar com 0 e 1.
 * 2. Considere apenas os termos pares da sequência.
 * 3. Inclua na soma apenas os termos que não excedam 50.000.
 * 4. A função deve retornar o valor da soma.
 *
 * Exemplo:
 * Os primeiros termos da sequência são: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * Os termos pares são: 2, 8, 34, ...
 * A soma dos termos pares que não excedem 50.000 deve ser calculada.
 */

function somaFibonacciPares() {
    let a = 0, b = 1;
    let soma = 0;
    let proximoTermo = a + b;

    while (proximoTermo <= 50000) {
        if (proximoTermo % 2 === 0) {
            soma += proximoTermo;
        }
        a = b;
        b = proximoTermo;
        proximoTermo = a + b;
    }

    return soma;
}

module.exports = somaFibonacciPares;