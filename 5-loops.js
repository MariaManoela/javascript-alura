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

let contador = 0;
while(contador < 3) {
    if(listaDeDestinos[contador] == destino) {
        console.log("Destino existe!")
        break;
    } else
        console.log("Destino não existe!")
    contador++;
}
