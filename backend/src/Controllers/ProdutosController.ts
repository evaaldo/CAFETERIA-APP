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

}