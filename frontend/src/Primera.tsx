import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { IImporte } from './interfaces/importe.interface';
import { IImporteResponse } from './interfaces/importe.interface';

export const EjemploActividad = () => {
  const [importe, setImporte] = useState<IImporte>({
    importe: ''
  });


  const { importe } = importe;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchServer();
  };

  const fetchServer = async (): Promise<void> => {
    try {
      // get
      const data = await fetch(`http://localhost:3000/api/actividades1/primera/${importe}`);
      const jsonRespuesta: IImporteResponse = await data.json();
    } catch (e) {
    }
  };

  const onChangeImporte = (e: ChangeEvent<HTMLInputElement>) => {
    setImporte({importe: e.target.value});
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

    </>
  );
};