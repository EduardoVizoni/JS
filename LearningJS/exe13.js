/* Crie uma função chamada ehPar que recebe um número como parâmetro e
retorna true se o número for par e false caso contrário. */

function ehPar(a) {
    if (a % 2 == 0) {
        return true;
    }
    return false;
}
console.log(ehPar(8));