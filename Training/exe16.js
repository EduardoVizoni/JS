/* Crie uma função que aceite dois parâmetros: um array de números e um
número. A função deve retornar um novo array com todos os números maiores que o
número fornecido.
 Exemplo de uso:
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 5;
console.log(filtrarNumeros(array, num)); [6, 7, 8, 9] */

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 5;

function filtrarNumeros(array, num) {
    return array.filter(function(elemento) {
      return elemento > num;
    });
  }
  console.log(filtrarNumeros(array, num));
  