/* Crie uma função que aceite um array e um valor. A função deve retornar a
quantidade de vezes que o valor aparece no array.
 Exemplo de uso:
let array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let valor = 4;
console.log(contarOcorrencias(array, valor)); 4 */

let array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let valor = 4;

function contarOcorrencias(array, valor) {
    return array.filter(function(elemento) {
      return elemento === valor;
    }).length;
  }
  console.log(contarOcorrencias(array, valor)); // 4
  