import { sql } from "../Database/db";

export class ProdutosService {

    async listarTodosOsProdutos() {

        const produtos = await sql`SELECT * FROM PRODUTOS`;

        return produtos;

    }

}