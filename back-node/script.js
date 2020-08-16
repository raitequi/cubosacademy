/*
  Não altere nada ABAIXO disso até o próximo comentário;

  -- Este código permite que tenhamos uma 
  -- experiência interativa com o usuário;
  -- Não é necessário entendê-lo neste momento.
*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
  Não altere nada ACIMA deste comentário;;
*/

/**
 * Escreva seu código aqui embaixo;
 */

const cadastros = [

  {
    nome: "Iode Reis",
    dataDeNascimento: "24/08/1988",
    cpf: "03076772570",
    profissao: "Analista de redes",
    deletado: false
  }

];

function listarUsuarios() {

}

function deletarUsuario(cpf) {
  for (i=0; i < cadastros.length; i++) {
    if (cadastros[i].cpf || null) {
      cadastros[i].deletado == true
      console.log("Usuário de cpf "+ cadastros[i].cpf +" foi deletado!")
    } else {
      console.log("Usuário não encontrado")
    }
    
  }
}

console.log(cadastros[0]);