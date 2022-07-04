// Temos o seguinte código que define uma função que sabe validar um código:


// let codigo = 'GWZ-JJ-12';

// function validaCodigo(codigo) {

//     if(/\D{3}-\D{2}-\d{2}/.test(codigo)) {
//           alert('Código válido!');
//       } else {
//           alert('Código inválido');
//       }

// }

// validaCodigo('GWZ-JJ-12'); // válido
// validaCodigo('1X1-JJ-12'); // inválido


// Essa solução é procedural. Veja que toda vez que criarmos um código precisaremos buscar em algum lugar do nosso sistema alguém que o valide. Temos uma separação entre dado e comportamento.

// Refaça o código acima adotando o paradigma da orientação a objetos. Uma dica: tudo começa com a criação da classe Codigo. Não se preocupe, a ideia aqui é instigar algumas percepções em você sobre este paradigma.


class Codigo {

    constructor(texto) {
        if(!this._valida(texto))
            throw new Error(`O texto ${texto} não é um código válido`);
        this._texto = texto;
    }

    _valida(texto) {
        return /\D{3}-\D{2}-\d{2}/.test(texto);
    }

    get texto() {
        return this._texto;
    }
}