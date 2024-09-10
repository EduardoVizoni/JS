/* Crie uma função que aceite uma string e retorne o número de vogais nessa
string.
 Exemplo de uso:
let texto = "Exemplo de uma string qualquer";
console.log(contarVogais(texto));  10 */

let texto = "JavaScript";

function contarVogais(str) {
    const vogais = str.match(/[aeiouAEIOU]/g);
    return vogais ? vogais.length : 0;
  }
  console.log(contarVogais(texto));
  