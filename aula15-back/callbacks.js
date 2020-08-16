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

 rl.question('Qual seu curso? ', function qualCurso(resposta) {
     console.log('O curso informado é ' +resposta);
     rl.close();
 });