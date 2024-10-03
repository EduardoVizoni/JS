// Calcular a média de 3 notas e mostrar a situação do aluno (aprovado (maior igual a 7), reprovado (<2,5) ou em exame).

let nota1 = 5;
let nota2 = 8;
let nota3 = 9;

media = (nota1 + nota2 + nota3) / 3;

if (media >= 7.5) {
    console.log("Aprovado");
} else if (media < 2.5) {
    console.log("Reprovado");
}