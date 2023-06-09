import { IPersona } from "../interfaces/persona.interface";

export const descuento = (importe: number) => {
	if (importe > 1000) {
		return importe * 0.2;
	} else {
		return importe * 0.1;
	}
};

export const bruto = (importe: number, descuento: number) => {
	return importe - descuento;
};

export const iva = (bruto: number) => {
	return bruto * 0.21;
};

export const neto = (bruto: number, iva: number) => {
	return bruto + iva;
};

export const invertirPalabra = (palabra: string) => {
	let palabraAlReves: string = "";
	for (let i = palabra.length - 1; i >= 0; i--) {
		palabraAlReves += palabra[i];
	}
	return palabraAlReves;
};

export const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};

export const encuentraNombre = (nombre: string, listado: IPersona[]) => {
return listado.find((x) => nombre.toLowerCase() === x.nombre.toLowerCase());
};

export const encuentraPoblacion = (poblacion: string, listado: IPersona[]) => {
	return listado.filter((x) => poblacion.toLowerCase() === x.poblacion.toLowerCase());
};