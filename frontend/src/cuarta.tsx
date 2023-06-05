import React, { useState } from "react";

export const Cuarta = () => {
	const [saldo, setSaldo] = useState<number>(0);
	const [resultado, setResultado] = useState<string>("");
	const [empezar, setEmpezar] = useState<boolean>(false);
	const jugarPartida = async () => {
		setEmpezar(true);
		const nCliente = Math.floor(Math.random() * 100 + 1);
		const response = await fetch(
			"http://localhost:3000/api/actividades1/cuarta",
			{
				method: "GET",
			}
		);
		const data = await response.json();
		const nServidor = data.numeroAleatorio;

		if (saldo > 0) {
			const marcador = `Marcador: cliente ${nCliente}, servidor ${nServidor}.`;
			if (nCliente > nServidor) {
				setResultado(marcador + " ¡Has ganado!");
				setSaldo(saldo + 10);
			} else if (nCliente < nServidor) {
				setResultado(marcador + " ¡Has perdido!");
				setSaldo(saldo - 10);
			} else {
				setResultado(marcador + " ¡Empate!");
			}
		} else {
			setResultado("Ya no puedes jugar porque se te ha acabado el saldo.");
		}
	};

	const handleChangeSaldo = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSaldo(Number(e.target.value));
	};

	return (
		<article>
			<h2>Juego contra el servidor</h2>
			<label htmlFor="saldo">Saldo</label>
			<input
				type="number"
				id="saldo"
				value={saldo}
				onChange={handleChangeSaldo}
				min="10"
				step="10"
			/>

			<button onClick={jugarPartida}>Jugar partida contra el servidor</button>
			<h3>Resultado</h3>
			<p>Saldo actual: {saldo}</p>
			{empezar && <p>{resultado}</p>}
		</article>
	);
};
