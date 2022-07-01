// Temos a seguinte sequência de números:

// let numeros = [3,2,11,20,8,7];

// Sua tarefa: criar uma nova lista com a mesma quantidade de números, mas cada elemento da nova lista deve ter seu valor dobrado quando for ímpar.

let numeros = [3,2,11,20,8,7];
let novosNumeros = [];

numeros.forEach((item) => {
    if (item % 2) //resultado = 0 -> false
        novosNumeros.push(item * 2);
    else
        novosNumeros.push(item);
});

console.log(novosNumeros);