// exercicio5.js
// Enunciado: Crie uma função que conta quantas vogais existem em uma string.
// Deve ser exportada a função contarVogais

function contarVogais(palavra){
    let vogais = "aeiouAEIOU";
    let somaVogal = 0;

    for (let i = 0; i < palavra.length; i++) {
        if(vogais.includes(palavra[i])){
            somaVogal++;
        }
    }
    return somaVogal;
}

module.exports = contarVogais;