import { sql } from "../Database/db";

export class ProdutosService {

    async listarTodosOsProdutos() {

        const produtos = await sql`SELECT * FROM PRODUTOS`;

        return produtos;

    }

    async adicionarProduto(ID_PRODUTO: string, NOME_PRODUTO: string, DESCRICAO_PRODUTO: string, PRECO_PRODUTO: number, QUANTIDADE_PRODUTO: number) {

        await sql`INSERT INTO PRODUTOS VALUES(${ID_PRODUTO}, ${NOME_PRODUTO}, ${DESCRICAO_PRODUTO}, ${PRECO_PRODUTO}, ${QUANTIDADE_PRODUTO})`;

    }

}