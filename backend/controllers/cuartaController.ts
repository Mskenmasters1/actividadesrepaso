import { Request, Response } from 'express';
import { generarNumeroAleatorio } from '../helpers/funciones';

export const cuartaGet = async (req: Request, res: Response) => {
  const numeroAleatorio = generarNumeroAleatorio();
  res.status(200).json({ numeroAleatorio: numeroAleatorio });
};
