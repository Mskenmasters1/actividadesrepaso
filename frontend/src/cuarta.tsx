import React, { useState } from "react";

export const Cuarta = () => {
    const [saldo, setSaldo] = useState("");
    const [numeroServidor, setNumeroServidor] = useState("");
    const [resultado, setResultado] = useState("");

    const jugarPartida = async () => {
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        const response = await fetch("http://localhost:3000/api/actividades1/cuarta", {
            method: 'GET'
        });
        const data = await response.json();
        const numeroServidor = data.numero;

        if (numeroServidor < numeroAleatorio) {
            setResultado("Ganaste");
        } else if (numeroServidor > numeroAleatorio) {
            setResultado("Perdiste");
        } else {
            setResultado("Empate");
        }

        setNumeroServidor(numeroServidor.toString());
    };

    const handleChangeSaldo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSaldo(e.target.value);
    };

    return (
        <div>
            <h1>Juego contra el servidor</h1>
            <p>Saldo: {saldo}</p>
            <input type="text" value={saldo} onChange={handleChangeSaldo} />
            <button onClick={jugarPartida}>Jugar partida contra el servidor</button>
            <p>Resultado: {resultado}</p>
            {numeroServidor && <p>Número del servidor: {numeroServidor}</p>}
        </div>
    );
};
