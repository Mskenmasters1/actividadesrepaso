import React, { useState } from 'react';

const JuegoAproximacion = () => {
    const [numeroIngresado, setNumeroIngresado] = useState(0);
    const [mensaje, setMensaje] = useState('');
    const [ganador, setGanador] = useState('');

    const verificarAproximacion = async () => {
        try {
            const response = await fetch(`/aproximacion?numero=${numeroIngresado}`);
            const data = await response.json();
            setMensaje(data.mensaje);
            setGanador(data.ganador);
        } catch (error) {
            console.error('Error al verificar la aproximación:', error);
        }
    };

    const resetearJuego = () => {
        setNumeroIngresado(0);
        setMensaje('');
        setGanador('');
    };

    return (
        <div>
            <h1>Juego de Aproximación al Número Aleatorio</h1>
            {!ganador ? (
                <div>
                    <p>Ingresa un número:</p>
                    <input
                        type="number"
                        value={numeroIngresado}
                        onChange={(e) => setNumeroIngresado(e.target.value)}
                        required
                    />
                    <button onClick={verificarAproximacion}>Verificar</button>
                </div>
            ) : (
                <div>
                    <p>{mensaje}</p>
                    <p>Ganador: {ganador}</p>
                    <button onClick={resetearJuego}>Reiniciar Juego</button>
                </div>
            )}
        </div>
    );
};

export default JuegoAproximacion;
