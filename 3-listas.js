console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

listaDeDestinos.push(`Porto Alegre`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 2); 
//posição do item que deseja deletar, 
//quantidade de itens que deseja deletar a partir do item selecionado
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);
