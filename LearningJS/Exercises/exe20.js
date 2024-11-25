/* Crie um objeto chamado carro com propriedades: marca, modelo e ano.
Acesse a propriedade marca do objeto carro.
Altere a propriedade ano do objeto carro para 2025.
Adicione um método ao objeto carro chamado getIdade que retorne quantos anos o carro
tem (ano atual - ano do carro).
Adicione um método ao objeto carro chamado getDescricao que retorne uma string
contendo todas as informações do carro. */

let carro = {
    marca: "Mustang",
    modelo: "Charger HellCat STR ",
    anoCarro: 2023,

    getIdade: function() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.anoCarro;
    },
    
    getDescricao: function() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
};
console.log(carro.marca);
console.log(carro.getIdade());
console.log(carro.getDescricao());