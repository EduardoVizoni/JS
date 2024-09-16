// Crie uma função que retorne a diferença em dias entre duas datas.

function diferencaDatas(dia1, dia2) {

    const data1 = new Date(dia1);
    const data2 = new Date(dia2);

    const diferencaMs = Math.abs(data2 - data1);

    const diferencaDias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));

    return diferencaDias;
}

const dataX = "2024-09-01";
const dataY = "2024-09-16";
console.log(diferencaDatas(dataX, dataY));
console.log(diferencaDatas(12, 20));