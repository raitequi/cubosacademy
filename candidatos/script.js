function processarVotos(votosA, votosB, votosC) {
    //Sua resolução aqui
    //imprimir(`Total de votos: ${votosA+votosB+votosC}`);

    let porcentagem = (votosA)/(votosA+votosB+votosC)*100;

  //  if (votosA > votosB && votosA > votosC) {
  //      imprimir(`O candidato que está ganhando é o A, com ${votosA} votos. Total de ${(votosA)/(votosA+votosB+votosC)*100} %`)
  //  }
  // if (votosB > votosA && votosB > votosC) {
  //      imprimir(`O candidato que está ganhando é o B, com ${votosB} votos. Total de ${(votosB)/(votosA+votosB+votosC)*100} %`)
  //  }
  // if (votosC > votosA && votosC > votosB) {
  //      imprimir(`O candidato que está ganhando é o C, com ${votosC} votos. Total de ${(votosC)/(votosA+votosB+votosC)*100} %`)
  //  }

    
    if (porcentagem < 50) {
        imprimir(`O candidato que está ganhando é o A, com ${votosA} votos. Não haverá segundo turno`)
        } else {
        imprimir(`O candidato que está ganhando é o A, com ${votosA} votos. Haverá segundo turno`) 
    }

}


//Não mexa em nada daqui pra baixo
let votosA = 0, votosB = 0, votosC = 0;

function imprimir(text) {
    document.getElementById("imprimir").innerHTML= text;
}

document.getElementById("a").addEventListener("click", () => {
    votosA++;
    document.getElementById("a").innerHTML = votosA;
    processarVotos(votosA, votosB, votosC);
});

document.getElementById("b").addEventListener("click", () => {
    votosB++;
    document.getElementById("b").innerHTML = votosB;
    processarVotos(votosA, votosB, votosC);
});

document.getElementById("c").addEventListener("click", () => {
    votosC++;
    document.getElementById("c").innerHTML = votosC;
    processarVotos(votosA, votosB, votosC);
});