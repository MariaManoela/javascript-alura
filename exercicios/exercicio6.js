// Pratique seu conhecimento de ES6 reescrevendo as 3 funções map do exercício anterior, utilizando arrow functions.

// Aqui estão elas:

// let dobro = numeros.map(function(num) {
//     return num * 2;
// });

// let metade = numeros.map(function(num) {
//     return num/2;
// });

// let raiz = numeros.map(function(num) {
//     return Math.sqrt(num);
// });

let dobro = numeros.map(num => num * 2);
let metade = numeros.map(num => num / 2);
let raiz = numeros.map(num => Math.sqrt(num));