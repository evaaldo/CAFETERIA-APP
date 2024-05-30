import { Request, Response } from "express";
import { ProdutosService } from "../Services/ProdutosService";

const produtosService = new ProdutosService();

export class ProdutosController {

    async listarTodosOsProdutos(request: Request, response: Response) {

        const produtos = await produtosService.listarTodosOsProdutos();

        return response.status(200).json(produtos);

    }

    async adicionarProduto(request: Request, response: Response) {

        const produto = request.body;

        await produtosService.adicionarProduto(produto.ID_PRODUTO, produto.NOME_PRODUTO, produto.DESCRICAO_PRODUTO, produto.PRECO_PRODUTO, produto.QUANTIDADE_PRODUTO);

        return response.status(200).json({ message: "Produto adicionado!" });

    }

    async atualizarQuantidadeProduto(request: Request, response: Response) {

        const produto = request.body;
        const idProduto = request.params.id;

        await produtosService.atualizarQuantidadeProduto(idProduto, produto.QUANTIDADE_PRODUTO);

        return response.status(200).json({ message: "Quantidade atualizada!" });

    }

    async atualizarPrecoProduto(request: Request, response: Response) {

        const produto = request.body;
        const idProduto = request.params.id;

        await produtosService.atualizarPrecoProduto(idProduto, produto.PRECO_PRODUTO);

        return response.status(200).json({ message: "Preço atualizado!" });

    }

    async atualizarProduto(request: Request, response: Response) {

        const produto = request.body;
        const idProduto = request.params.id;

        await produtosService.atualizarProduto(idProduto, produto.NOME_PRODUTO, produto.DESCRICAO_PRODUTO, produto.PRECO_PRODUTO, produto.QUANTIDADE_PRODUTO);

        return response.status(200).json({ message: "Produto atualizado!" });

    }

    async deletarProduto(request: Request, response: Response) {

        const idProduto = request.params.id;

        await produtosService.deletarProduto(idProduto);

        return response.status(200).json({ message: "Produto deletado!" })

    }

}