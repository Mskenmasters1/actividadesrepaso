import { Request, Response } from 'express';
import {IImporte} from '../interfaces/importe.interface'
import { bruto, descuento, iva, neto } from '../helpers/funciones';

export const primeraGet = async (req: Request, res: Response) => {
  const {importe} = req.params;
  const base = parseFloat(importe);
  const descuento: = descuento(base);
  const bruto: = bruto(base,descuento);
  const iva: = iva(bruto);
  const neto: = neto(bruto,iva);
  res.status(200).json({descuento,bruto,iva,neto});
};
