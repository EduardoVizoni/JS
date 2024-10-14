/* Crie uma função que aceite um número e retorne um array com todos os
números de 1 até o número fornecido, incluindo o número fornecido.
Exemplo de uso:
let numero = 5;
console.log(criarArray(numero)); [1, 2, 3, 4, 5] */

let numero = 100;

function criarArray(numero) {
    return Array.from({ length: numero }, (_, index) => index + 1);
}
console.log(criarArray(numero));    
