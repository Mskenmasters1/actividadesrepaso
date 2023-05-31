import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { IImporteResponse } from './interfaces/importe.interface';

export const EjemploActividad = () => {
  const [importe, setImporte] = useState<string>('');
const [mensaje, setMensaje] = useState<string>('');
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchServer();
  };

  const fetchServer = async (): Promise<void> => {
    try {
      // get
      const data = await fetch(`http://localhost:3000/api/actividades1/primera/${importe}`);
      const resultados: IImporteResponse = await data.json();
      setMensaje(`Se le ha aplicado un descuento de ${resultados.descuento}; el bruto es de ${resultados.bruto}; el IVA correspondiente es de ${resultados.iva} y, por lo tanto, el neto es de ${resultados.neto}.`);
    } catch (e) {
      setMensaje('No se han podido realizar los cálculos solicitados.');
    }
  };

  const onChangeImporte = (e: ChangeEvent<HTMLInputElement>) => {
    setImporte(e.target.value);
  };
  
  // Como el array de dependencias está vacío, esto se ejecutará la primera vez que se carga el componente.
useEffect(() => {
  // Establecemos el título de la página
  document.title = 'Primera - Actividad de refuerzo';
}, []);

  return (
    <>
      <h1>Primera actividad</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="importe">Importe</label>
          <input className="form-control" id="importe" type="number" value={importe} onChange={onChangeImporte} min="0.01" step="0.01" autoComplete='transaction-amount' />
        </div>
        
        <button className="btn btn-success" type="submit">
          Calcular
        </button>
      </form>
<p role='region' aria-live='polite'>{mensaje}</p>
    </>
  );
};