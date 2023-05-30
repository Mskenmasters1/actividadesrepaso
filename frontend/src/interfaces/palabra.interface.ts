// Esto tipa lo que viene del formulario
export interface IPalabra {
	palabra: string;
};

// Esto tipa lo que devuelve el servidor
export interface IPalabraResponse {
	palabra: IPalabra;
};