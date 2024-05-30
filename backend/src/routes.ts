import { Router, Request, Response } from "express";
import { ProdutosController } from "./Controllers/ProdutosController";

export const router = Router();
const produtosController = new ProdutosController();

// Rota pública
router.get("/", (request: Request, response: Response) => { return response.status(200).json({ message: "Retorno da rota pública" }) });

// Rotas de produtos
router.get("/listarTodosProdutos", produtosController.listarTodosOsProdutos);
router.post("/adicionarProduto", produtosController.adicionarProduto);
router.patch("/atualizarQuantidadeProduto/:id", produtosController.atualizarQuantidadeProduto);
router.patch("/atualizarPrecoProduto/:id", produtosController.atualizarPrecoProduto);
router.put("/atualizarProduto/:id", produtosController.atualizarProduto);
router.delete("/deletarProduto/:id", produtosController.deletarProduto);