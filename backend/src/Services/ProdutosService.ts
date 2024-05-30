import { sql } from "../Database/db";

export class ProdutosService {

    async listarTodosOsProdutos() {

        const produtos = await sql`SELECT * FROM PRODUTOS`;

        return produtos;

    }

    async adicionarProduto(ID_PRODUTO: string, NOME_PRODUTO: string, DESCRICAO_PRODUTO: string, PRECO_PRODUTO: number, QUANTIDADE_PRODUTO: number) {

        await sql`INSERT INTO PRODUTOS VALUES(${ID_PRODUTO}, ${NOME_PRODUTO}, ${DESCRICAO_PRODUTO}, ${PRECO_PRODUTO}, ${QUANTIDADE_PRODUTO})`;

    }

    async atualizarQuantidadeProduto(ID_PRODUTO: string, QUANTIDADE_PRODUTO: number) {

        await sql`UPDATE PRODUTOS SET QUANTIDADE_PRODUTO = ${QUANTIDADE_PRODUTO} WHERE ID_PRODUTO = ${ID_PRODUTO}`;

    }

    async atualizarPrecoProduto(ID_PRODUTO: string, PRECO_PRODUTO: number) {

        await sql`UPDATE PRODUTOS SET PRECO_PRODUTO = ${PRECO_PRODUTO} WHERE ID_PRODUTO = ${ID_PRODUTO}`;

    }

    async atualizarProduto(ID_PRODUTO: string, NOME_PRODUTO: string, DESCRICAO_PRODUTO: string, PRECO_PRODUTO: number, QUANTIDADE_PRODUTO: number) {

        await sql`UPDATE PRODUTOS SET NOME_PRODUTO = ${NOME_PRODUTO}, DESCRICAO_PRODUTO = ${DESCRICAO_PRODUTO}, PRECO_PRODUTO = ${PRECO_PRODUTO}, QUANTIDADE_PRODUTO = ${QUANTIDADE_PRODUTO} WHERE ID_PRODUTO = ${ID_PRODUTO}`

    }

    async deletarProduto(ID_PRODUTO: string) {

        await sql`DELETE FROM PRODUTOS WHERE ID_PRODUTO = ${ID_PRODUTO}`;

    }

}