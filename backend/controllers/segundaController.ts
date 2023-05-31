import { Request, Response } from "express";
import { invertirPalabra } from "../helpers/funciones";

export const segundaGet = async (req: Request, res: Response) => {
	const { palabra } = req.params;
	const palabraInvertida = invertirPalabra(palabra);
	res.status(200).json({ palabraInvertida });
};
