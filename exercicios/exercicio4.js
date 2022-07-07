// Demostre seu conhecimento de ES6 reescrevendo o exemplo da função reduce, utilizando uma arrow function no lugar da função tradicional.

// numeros.reduce(function(total,num) {
//     return total * num;
// }, 1);

numeros.reduce((total, num) => total * num, 1);