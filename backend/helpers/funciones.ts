const descuento = (importe: number) => {
	if (importe > 1000) {
		return importe*0.2;
	} else {
		return importe*0.1;
	};
};

const bruto = (importe: number, descuento: number) => {
	return importe - descuento;
};

const iva = (bruto: number) => {
	return bruto * 0.21;
};
const neto = (bruto: number, iva: number) => {
	 return bruto + iva;
};
