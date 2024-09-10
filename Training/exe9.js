/* Dado um array de 10 números inteiros, escreva um programa em JavaScript que ordene os elementos do array
em ordem crescente utilizando o algoritmo Bubble Sort. Apresente o array ordenado no console. */

let arrayBubble = [1, 9, 3, 8, 5, 7, 6, 4, 2, 10];

function bubbleSort () {
    for (let i = 0; i < arrayBubble.length; i++) {
        if (arrayBubble[i] > arrayBubble[i +1]) {
            let v1 = arrayBubble[i]
            let v2 = arrayBubble[i +1] 
            arrayBubble[i] = v2
            arrayBubble[i +1] = v1
        }
    }
}

for (let j = 0; j < arrayBubble.length ; j++) {
    bubbleSort();
}

console.log(arrayBubble)
