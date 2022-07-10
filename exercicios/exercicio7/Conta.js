// Crie uma classe chamada Conta. Ela terá apenas um atributo: o saldo. Passe o atributo no construtor e crie também um getter para a propriedade.

// Além disso, defina o método atualiza, na classe Conta, que recebe um parâmetro taxa.

// Dentro do método atualiza, jogue uma exceção para garantir que ninguém chame o método sem ter uma filha em mãos.

// Não é necessário criar outra classe que herde de Conta por enquanto, a ideia aqui é apenas focar o design da classe.

class Conta {

    constructor(saldo) {
        this._saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }

    atualiza(taxa) {
        throw new Error('Você deve sobrescrever o método!');
    }
}