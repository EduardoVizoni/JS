/* Crie um objeto "conta" que represente uma conta bancária. Ele deve conter
propriedades como "saldo" e "titular" e métodos para "depositar", "sacar" e "verSaldo". */

const Conta = {
    saldo: 0,
    titular: '',

    init(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
        return this;
    },

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        } else {
            console.log('O valor do depósito deve ser maior que zero.');
        }
    },

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else {
            console.log('Saldo insuficiente ou valor inválido para saque.');
        }
    },

    verSaldo() {
        console.log(`O saldo atual da conta é R$${this.saldo}.`);
    }
};

const minhaConta = Object.create(Conta).init('João Silva', 1000);

minhaConta.verSaldo(); 
minhaConta.depositar(500);
minhaConta.verSaldo();
minhaConta.sacar(200);
minhaConta.verSaldo();
