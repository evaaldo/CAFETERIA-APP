import { Request, Response } from "express";
import { ProdutosService } from "../Services/ProdutosService";

const produtosService = new ProdutosService();

export class ProdutosController {

    async listarTodosOsProdutos(request: Request, response: Response) {

        const produtos = produtosService.listarTodosOsProdutos();

        return response.status(200).json(produtos);

    }

}