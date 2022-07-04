// Um programador amigo do coração criou uma função genérica para imprimir todos os itens de qualquer lista no console:

// function exibeNoConsole(lista) {
//     lista.forEach(item => console.log(item));
// }

// Excelente, mas em nossa aplicação dentro de um contexto específico temos duas listas distintas que queremos imprimir no console. Sendo assim, precisamos chamar a função duas vezes.

// Para evitar de chamarmos a função duas vezes, uma vez para cada lista, podemos juntar uma lista na outra. Implemente o código que cria uma nova lista que é a junção dos elementos de listaDeNomes1 e listaDeNomes2.


// como eu fiz
let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
let lista = [...listaDeNomes1, ...listaDeNomes2];

function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}

exibeNoConsole(lista);


// resolução do exercício
let listaDeNomes3 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes4 = ['Vieira', 'Fernanda', 'Gerson'];

function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}

exibeNoConsole([].concat(listaDeNomes3, listaDeNomes4));