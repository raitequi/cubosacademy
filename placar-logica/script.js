let scoreA = 0; //pontuação do time A no set atual
let scoreB = 0; //pontuação do time B no set atual
let setA = 0; //quantidade de sets vencidos pelo time A
let setB = 0; //quantidade de sets vencidos pelo time B
let infoAdicional = "Vai começar a partida!";

function processarPonto() {
    //seu código aqui
    if (scoreA >= 21 && scoreA - scoreB >= 2) {
        setA++
        scoreA = 0
        scoreB = 0
        infoAdicional = "Time A venceu o último set!";
    }
    if (scoreB >= 21 && scoreB - scoreA >= 2) {
        setB++
        scoreA = 0
        scoreB = 0
        infoAdicional = "Time B venceu o último set!";
    }

    if (setA == setB && setA > 0 && setB > 0) {
        infoAdicional = "Vamos ao tie break!";
        if (scoreA >= 15 && scoreA - scoreB >= 2) {
            setA = 0
            setB = 0
            scoreA = 0
            scoreB = 0
            infoAdicional = "Time A venceu o jogo!";
        }
        if (scoreB >= 15 && scoreB - scoreA >= 2) {
            setA = 0
            setB = 0
            scoreA = 0
            scoreB = 0
            infoAdicional = "Time B venceu o jogo!";
        }
    }

    if (setA == 2) {
        setA = 0
        setB = 0
        scoreA = 0
        scoreB = 0
        infoAdicional = "Que lavada! O time A venceu o jogo por 2 sets a 0";
    }
    if (setB == 2) {
        setA = 0
        setB = 0
        scoreA = 0
        scoreB = 0
        infoAdicional = "Que lavada! O time B venceu o jogo por 2 sets a 0!";
    }

    //sempre chame essa função para que as alterações nas variáveis reflitam na tela
    atualizarPlacar();
}

//Não precisa mexer
function atualizarPlacar() {
    document.getElementById("scoreA").innerHTML = scoreA;
    document.getElementById("scoreB").innerHTML = scoreB;
    document.getElementById("setA").innerHTML = setA;
    document.getElementById("setB").innerHTML = setB;
    document.getElementById("info-adicional").innerHTML = infoAdicional;
}


document.getElementById("scoreA").addEventListener("click", () => {
    scoreA++;
    document.getElementById("scoreA").innerHTML = scoreA;
    processarPonto();
});

document.getElementById("scoreB").addEventListener("click", () => {
    scoreB++;
    document.getElementById("scoreB").innerHTML = scoreB;
    processarPonto();
});
atualizarPlacar();