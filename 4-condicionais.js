console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

const idadeComprador = 14;
const estaAcompanhada = true;
const temPassagemComprada = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Comprador menor de idade e sem acompanhante, não pode comprar");
}

console.log("Embarque: \n");
if(idadeComprador >= 18 || estaAcompanhada && temPassagemComprada){
    console.log("Boa viagem!");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);
