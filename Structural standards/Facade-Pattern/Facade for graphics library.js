// Cria um objeto contendo os dados que serão enviados para o servidor
const dados = { nome: "Lucas", idade: 28 };

// Usa a API fetch para fazer uma requisição HTTP do tipo POST para o endpoint especificado
fetch("https://exemplo.com/api/usuarios", {
    // Define o método da requisição como POST (enviar dados)
    method: "POST",

    // Define os cabeçalhos da requisição
    headers: {
        // Informa ao servidor que o corpo da requisição está em formato JSON
        "Content-Type": "application/json"
    },

    // Converte o objeto `dados` em uma string JSON para ser enviado no corpo da requisição
    body: JSON.stringify(dados)
})

// Quando a resposta chegar, converte-a de JSON para objeto JavaScript
.then(res => res.json())

// Quando a conversão for concluída, imprime a resposta no console
.then(resposta => console.log(resposta))

// Captura e trata qualquer erro que ocorra durante a requisição ou conversão
.catch(erro => console.error("Erro:", erro));
