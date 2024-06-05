document.addEventListener('DOMContentLoaded', () => {

    fetch("http://localhost:3000/listarTodosProdutos")
    .then(response => response.json())
    .then(data => {
        let conteudoHTML = "";
        data.forEach(produto => {
            conteudoHTML += `
            <div class="card">
                <div class="card-header">
                    Disponível
                </div>
                <div class="card-body">
                    <h5 id="produto_titulo" class="card-title">${produto.nome_produto}</h5>
                    <p id="produto_descricao" class="card-text">${produto.descricao_produto}</p>
                    <h5 id="produto_preco" class="card-title">R${produto.preco_produto}</h5>
                    <a href="#" class="btn btn-success w-100">Comprar</a>
                </div>
            </div>
            `
        });
        document.getElementById("conteudo").innerHTML = conteudoHTML;
    })
    .catch(error => {
        document.getElementById("conteudo").innerHTML = `
            <div class="alert alert-danger text-center" style="position: absolute; right: 15px; bottom: 15px;" role="alert">
                Erro ao conectar-se com o servidor
            </div>
        `;
        console.log("Error: " + error);
    })

});