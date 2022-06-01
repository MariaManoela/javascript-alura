console.log(`\nTrabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

const idadeComprador = 14;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let destinoExiste = false;
for(let i = 0; i < listaDeDestinos.length; i++) {
    if(listaDeDestinos[i] == destino) 
        destinoExiste = true;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste)
    console.log("Boa viagem!");
else
    console.log("Desculpe, tivemos um erro");