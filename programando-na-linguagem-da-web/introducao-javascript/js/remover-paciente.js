var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.remove();
    //event.target -> campo que foi clicado
    //parentNode -> pai do campo que foi clicado, que é o que queremos remover (<tr>)
});


// Essa função funciona, mas só nos elementos já existentes na página. Para conseguir remover os elementos adicionados à tabela, deve ser usado a função acima

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove();
//     });
// });