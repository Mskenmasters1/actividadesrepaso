const descuento = (importe: number) => {
	if (importe > 1000) {
		return importe * 0.2;
	} else {
		return importe * 0.1;
	}
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

const invertirPalabra = (palabra: string) => {
	let palabraAlReves: string = "";
	for (let i = palabra.length - 1; i >= 0; i--) {
		palabraAlReves += i;
	}
	return palabraAlReves;
};

