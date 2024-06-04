document.addEventListener('DOMContentLoaded', () => {
    const formCadastro = document.getElementById("formularioCadastro");

    formCadastro.addEventListener("submit", (event) => {
        event.preventDefault();

        const idProduto = document.getElementById("idProduto").value.trim();
        const nomeProduto = document.getElementById("nomeProduto").value.trim();
        const descricao = document.getElementById("descricao").value.trim();
        const preco = document.getElementById("preco").value.trim();
        const quantidade = document.getElementById("quantidade").value.trim();

        // Verificação simples para valores indefinidos ou vazios
        if (!idProduto || !nomeProduto || !descricao || !preco || !quantidade) {
            alert("Todos os campos são obrigatórios.");
            return;
        }

        console.log(idProduto, nomeProduto, descricao, preco, quantidade)

        fetch("http://localhost:3000/adicionarProduto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "ID_PRODUTO": idProduto,
                "NOME_PRODUTO": nomeProduto,
                "DESCRICAO_PRODUTO": descricao,
                "PRECO_PRODUTO": preco,
                "QUANTIDADE_PRODUTO": quantidade
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            formCadastro.reset();
        })
        .catch(error => {
            document.getElementById("formularioCadastro").innerHTML = `
                <div class="alert alert-danger text-center" role="alert">
                    Erro ao conectar-se com o servidor
                </div>
            `;
            console.log("Error:", error);
        });
    });
});
