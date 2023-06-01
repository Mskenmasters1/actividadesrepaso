import React, { useState } from "react";

export const Cuarta = () => {
    const [saldo, setSaldo] = useState<number>(0);
    const [numeroServidor, setNumeroServidor] = useState<number>(0);
    const [numeroCliente, setNumeroCliente] = useState<number>(0);
    const [resultado, setResultado] = useState<string>("");

    const jugarPartida = async () => {
        setNumeroCliente(Math.floor(Math.random() * 100 + 1));
        const response = await fetch(
            "http://localhost:3000/api/actividades1/cuarta",
            {
                method: "GET",
            }
        );
        const data = await response.json();
        setNumeroServidor(data.numero);
        if (saldo > 0) {
            setResultado(`Marcador: cliente ${numeroCliente}, servidor ${numeroServidor}.`);
            if (numeroCliente > numeroServidor) {
                setResultado(resultado + ' ¡ Has ganado!');
            }
            else if (numeroCliente < numeroServidor) {
                setResultado(resultado + ' ¡Has perdido!');
            }
            else {
                setResultado(resultado + ' ¡Empate!');
            }
        }
        else {
            setResultado('Ya no puedes jugar porque se te ha acabado el saldo.');
        };
    };

    const handleChangeSaldo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSaldo(Number(e.target.value));
    };

    return (
        <div>
            <h1>Juego contra el servidor</h1>
            <label htmlFor="saldo">Saldo</label>
            <input
                type="number"
                id="saldo"
                value={saldo}
                onChange={handleChangeSaldo}
                min="10"
                step="10"
                multiple="10"
            />
            <button onClick={jugarPartida}>Jugar partida contra el servidor</button>
            <h2>Resultado</h2>
            <p>Saldo actual: {saldo}</p>
            <p>{resultado}</p>
        </div>
    );
};
