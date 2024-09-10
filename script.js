let frutas = ["Maçã", "Banana"];
console.log(frutas);
frutas.push("Laranja", "Uva", "Banana", "Morango");
console.log(frutas);
let ultimaFruta = frutas.pop();
console.log(frutas);
console.log(ultimaFruta);
frutas.unshift("Pêra", "Abacaxi");
console.log(frutas);
let primeiraFruta = frutas.shift();
console.log(frutas);
console.log(primeiraFruta);
frutas.splice(1, 1, "Manga");
console.log(frutas);
let frutas2 = ["Kiwi", "Abacate"];
frutas = frutas.concat(frutas2);
console.log(frutas);
frutas.forEach(function(item, indice) {
    console.log(indice, item); });
let frutas3 = frutas.map(function(frutas) {
      return frutas;
    });
console.log(frutas3);
let frutas4 = frutas.filter(function(fruta) {
    return fruta.length === 4;
});
console.log(frutas4);
let frutas5 = frutas.find(function(fruta) {
    return fruta.length === 7;
});
console.log(frutas5);
let frutas6 = frutas.findIndex(function(fruta){
    return fruta.length === 4;
});
console.log(frutas6);
let frutas7 = frutas.every(function(fruta){
    return fruta.length === 7;
});
console.log(frutas7);
console.log(frutas);
frutas.sort();
console.log(frutas);
let stringFrutas = frutas.join("");
console.log(stringFrutas);
let citricos = frutas.slice(1, 4);
console.log(citricos);
let incluiBanana = frutas.includes("Banana");
console.log(incluiBanana);