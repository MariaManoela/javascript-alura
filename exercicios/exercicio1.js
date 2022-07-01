// Temos a seguinte sequência de números:

// let numeros = [3,2,11,20,8,7];

// Sua tarefa: criar uma nova lista com a mesma quantidade de números, mas cada elemento da nova lista deve ter seu valor dobrado quando for ímpar.

// 1 forma de fazer
let numeros = [3,2,11,20,8,7];
let novosNumeros = [];

numeros.forEach((item) => {
    if (item % 2) //resultado = 0 -> false
        novosNumeros.push(item * 2);
    else
        novosNumeros.push(item);
});
console.log(novosNumeros);

// 2 forma de fazer
let numeros2 = [3,2,11,20,8,7];
let novosNumeros2 = numeros2.map(item => item % 2 ? item * 2 : item);
console.log(novosNumeros2);

// 3 forma de fazer
let numeros3 = [3,2,11,20,8,7];
let novosNumeros3 = numeros.map((item) => (item % 2 + 1) * item);
console.log(novosNumeros3);