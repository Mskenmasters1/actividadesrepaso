import { Request, Response } from "express";
import { IPersona } from "../interfaces/persona.interface";
import { encuentraNombre, encuentraPoblacion } from "../helpers/funciones";

const datos: IPersona[] = [
	{
		nombre: "Juan Luis",
		poblacion: "Pamplona",
	},
	{
		nombre: "Quico",
		poblacion: "Benidorm",
	},
	{
		nombre: "Javi",
		poblacion: "Madrid",
	},
	{
		nombre: "Bilal",
		poblacion: "Ceuta",
	},
	{
		nombre: "Gema",
		poblacion: "Málaga",
	},
	{
		nombre: "Ana",
		poblacion: "Málaga",
	},
	{
		nombre: "Moisés",
		poblacion: "Madrid",
	},
	{
		nombre: "Marta",
		poblacion: "Sevilla",
	},
	{
		nombre: "Raúl",
		poblacion: "Lleida",
	},
	{
		nombre: "Éric",
		poblacion: "Alicante",
	},
];

export const getPorNombre = async (req: Request, res: Response) => {
	const { nombre } = req.params;
	const persona = encuentraNombre(nombre, datos);
	if (!persona) {
		res.status(404).json({
			msg: 'Esa persona no existe.'
		});
	}
	else {
	res.status(200).json(persona);
};
};

export const getPorPoblacion = async (req: Request, res: Response) => {
	const { poblacion } = req.params;
	const gente: IPersona[] = encuentraPoblacion(poblacion,datos);
	res.status(200).json(gente);
};
