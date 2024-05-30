import { Router, Request, Response } from "express"

export const router = Router();

// Rota pública
router.get("/", (request: Request, response: Response) => { return response.status(200).json({ message: "Retorno da rota pública" }) });