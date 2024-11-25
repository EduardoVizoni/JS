/* Crie uma função chamada calcularMedia que recebe um array de números
como parâmetro e retorna a média dos números.
console.log(calcularMedia([1, 2, 3, 4, 5])); // 3 */

function calcularMedia(array) {
    let media = 0;
    for( let i = 0; i < array.length; i++) {
        media += array[i];
    }
    return media / array.length;
}
console.log(calcularMedia([1, 2, 3, 4]));