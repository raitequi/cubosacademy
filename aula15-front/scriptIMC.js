const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const botao = document.querySelector("button");


    botao.addEventListener("click", () => {
        
        let IMC = input1.valueAsNumber / (input2.valueAsNumber * input2.valueAsNumber)
        alert(IMC)
        if (IMC<18.5) {
            alert ("Abaixo do peso")
        } else if (IMC >=18.5 && IMC <=24.9) {
            alert ("Peso normal")
        } else if (IMC >=25 && IMC <=29.9) {
            alert ("Sobrepeso")
        } else if (IMC >=30 && IMC <=34.9) {
            alert ("Obesidade grau 1")
        } else if (IMC >=35 && IMC <=39.9) {
            alert ("Obesidade grau 2")
        } else if (IMC >=40) {
            alert ("Obesidade grau 3")
        }

    })