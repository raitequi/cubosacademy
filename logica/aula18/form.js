document.getElementById("salvar").addEventListener("click", () => {
    const nome = document.getElementById("nome").value
    const idade = document.getElementById("idade").value
    const cpf = document.getElementById("cpf").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value

    const pessoa = {
        Nome: nome,
        Idade: idade,
        CPF: cpf,
        Email: email,
        Telefone: telefone
    }

    const pessoaEmString = JSON.stringify(pessoa)
    localStorage.setItem('pessoa', pessoaEmString)
})

