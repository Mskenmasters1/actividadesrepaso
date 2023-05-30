// Esto tipa lo que devuelve el servidor
export interface IImporteResponse {
	descuento: number;
	bruto: number;
	iva: number;
	neto: number;
};