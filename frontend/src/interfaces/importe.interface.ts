// Esto tipa lo que viene del formulario
export interface IImporte {
	importe: string;
};

// Esto tipa lo que devuelve el servidor
export interface IImporteResponse {
	descuento: number;
	bruto: number;
	iva: number;
	neto: number;
};