// Verificar se um ano é bissexto.

function ehAnoBissexto(ano) {
    return(ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 ===0 ));
}
console.log(ehAnoBissexto(2024));