const descuento = (importe: number) => {
	if (importe > 1000) {
		return importe*0.2
	} else {
		return importe*0.1
	}
}