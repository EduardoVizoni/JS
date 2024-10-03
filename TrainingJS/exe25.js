/* Crie um array chamado "frutas" que contém "maçã", "banana" e "laranja".
Imprima o segundo elemento do array "frutas".
Adicione "manga" ao final do array "frutas".
Remova o primeiro elemento do array "frutas".
Verifique o tamanho do array "frutas".
Crie um loop for que percorre o array "frutas" e imprime cada fruta.
Use o método forEach para imprimir cada elemento do array "frutas".
Use o método map para criar um novo array que contém o tamanho de cada fruta do array
"frutas".
Use o método filter para criar um novo array que contém apenas as frutas do array "frutas"
que têm mais de 5 caracteres.
Use o método reduce para calcular a soma dos números em um array. */

let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[1]);
frutas.push("manga");
frutas.shift();
console.log(frutas.length);

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


frutas.forEach(fruta => console.log(fruta));

let tamanhosFrutas1 = frutas.map(fruta => fruta.length);
console.log(tamanhosFrutas1);
let tamanhosFrutas2 = frutas.map(fruta => fruta.length);
console.log(tamanhosFrutas2);
let frutasGrandes = frutas.filter(fruta => fruta.length > 5);
console.log(frutasGrandes);
let numeros1 = [1, 2, 3, 4, 5];
let soma = numeros1.reduce((total, numero) => total + numero, 0);
console.log(soma);