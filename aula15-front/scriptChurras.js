const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const botao = document.querySelector("button");


    botao.addEventListener("click", () => {
        
        const quantidadeAdulto = 
            {
                carne: 300,
                coracao: 100,
                cerveja: 500,
                refrigerante: 1000
            }
        

        const quantidadeCrianca = 
            {
                carne: 150,
                coracao: 50,
                refrigerante: 500
            }
        

        alert("Deverá trazer " +input1.value*quantidadeAdulto.carne+ "g de carne, " +input1.value*quantidadeAdulto.coracao+ "g de coracao, " 
            +input1.value*quantidadeAdulto.cerveja+ "ml de cerveja, " +input1.value*quantidadeAdulto.refrigerante+ "ml de refri.")

        alert("Deverá trazer também " +input2.value*quantidadeCrianca.carne+ "g de carne, " +input2.value*quantidadeCrianca.coracao+ "g de coracao, " 
            +input2.value*quantidadeCrianca.refrigerante+ "ml de refri.")

    })