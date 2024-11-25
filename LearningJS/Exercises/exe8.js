// Encontrar o maior número em um array.

let array = [1, 2, 3, 44, 5, 6];
let maiorNum = array[0];

for (i = 1; i <array.length; i++) {
    if (array[i] > maiorNum) {
        maiorNum = array[i]
    }
}

console.log(maiorNum);