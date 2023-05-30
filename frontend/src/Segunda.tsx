import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { IPalabra, IPalabraResponse } from './interfaces/palabra.interface';

export const Segunda = () => {
  // Objetivo:
  // Tenemos un formulario que pide una palabra
  // Se envía la palabra a un servidor node y este la devuelve al revés

  const [palabra, setPalabra] = useState<IPalabra>({
    palabra: ''
  });

  const [error, setError] = useState<boolean>(false);
  const [bienvenido, setBienvenido] = useState<boolean>(false);
  const [msgError, setMsgError] = useState<string>('');


  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchServer();
  };

  const fetchServer = async (): Promise<void> => {
    try {
      // post
      const body = JSON.stringify({ palabra }); // el body debe ser un string
      // const data = await fetch('http://localhost:3000/api/actividades1/segunda/', {
      //  headers: { 'Content-Type': 'application/json' },
      //   method: 'POST',
      // body
      // });
      // get
      const data = await fetch(`http://localhost:3000/api/actividades1/segunda/${palabra}`);
      const jsonRespuesta: IPalabraResponse = await data.json();
      if (data.status === 401) {
        setError(true);
        setBienvenido(false);
      } else {
        setError(false);
        setBienvenido(true);
      }
    } catch (e) {
      setError(true);
      setBienvenido(false);
      setMsgError('Se ha producido un error');
    }
  };

  const onChangePalabra = (e: ChangeEvent<HTMLInputElement>) => {
    setPalabra({ palabra: e.target.value });
  };


  // Como el array de dependencias está vacío, esto se ejecutará la primera vez que se carga el componente.
useEffect(() => {
  // Establecemos el título de la página
  document.title = 'Segunda - Actividad de refuerzo';
}, []);

  return (
    <>
      <h1>Actividad segunda</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="palabra">Introduce una palabra:</label>
          <input className="form-control" id="palabra" type="text" value={palabra} onChange={onChangePalabra} />
          {/* useState nos permite controlar en todo momento el valor del email y del password para, por ejemplo, sacar mensajes */}
          {palabra.trim() === '' && <small>Palabra obligatoria</small>}
        </div>
        <button className="btn btn-success" type="submit" disabled={palabra.trim() === ''}>
          Invertir palabra
        </button>
      </form>
      {error && (
        <div className="alert alert-danger" role="alert" aria-live="polite">
          {msgError}
        </div>
      )}
      {bienvenido && (
        <div className="alert alert-success" role="alert" aria-live="polite">
          Bienvenido!!!
        </div>
      )}
    </>
  );
};