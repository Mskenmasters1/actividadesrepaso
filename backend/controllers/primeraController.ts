import { Request, Response } from 'express';
import {IImporte} from '../interfaces/importe.interface'
import { bruto, descuento, iva, neto } from '../helpers/funciones';

export const primeraGet = async (req: Request, res: Response) => {
  const {importe} = req.params;
  const base = parseFloat(importe);
  const valores: IImporte = {
	descuento: 0,
	bruto: 0,
	iva: 0,
	neto: 0
  }
  valores.descuento = descuento(base);
  valores.bruto = bruto(base,valores.descuento);
  valores.iva = iva(valores.bruto);
  valores.neto = neto(valores.bruto,valores.iva);
  res.status(200).json(valores);
};
