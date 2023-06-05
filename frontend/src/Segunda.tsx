import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IPalabraResponse } from "./interfaces/palabra.interface";

export const Segunda = () => {
  // Objetivo:
  // Tenemos un formulario que pide una palabra
  // Se envía la palabra a un servidor node y este la devuelve al revés

  const [palabra, setPalabra] = useState<string>("");
  const [status, setStatus] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [palabraRespuesta, setPalabraRespuesta] = useState<string>('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchServer();
  };

  const fetchServer = async (): Promise<void> => {
    setLoading(true);

    try {
      // post
      // const body = JSON.stringify({ palabra }); // el body debe ser un string
      // const data = await fetch('http://localhost:3000/api/actividades1/segunda/', {
      //  headers: { 'Content-Type': 'application/json' },
      //   method: 'POST',
      // body
      // });
      // get
      const data = await fetch(
        `http://localhost:3000/api/actividades1/segunda/${palabra}`
      );

      const jsonRespuesta: IPalabraResponse = await data.json();
      setStatus(data.status);
      setLoading(false);
      setPalabraRespuesta(jsonRespuesta.palabraInvertida);
    } catch (e) {
      setLoading(false);
    }
  };

  const onChangePalabra = (e: ChangeEvent<HTMLInputElement>) => {
    setPalabra(e.target.value);
  };

  return (
    <article>
      <h2>Actividad segunda</h2>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="palabra">Introduce una palabra:</label>
          <input
            className="form-control"
            id="palabra"
            type="text"
            value={palabra}
            onChange={onChangePalabra}
          />
          {/* useState nos permite controlar en todo momento el valor del email y del password para, por ejemplo, sacar mensajes */}
          {palabra.trim() === "" && <small>Palabra obligatoria</small>}
        </div>
        <button
          className="btn btn-success"
          type="submit"
          disabled={palabra.trim() === ""}
        >
          Invertir palabra
        </button>

        {loading && (
          <div className="alert alert-warning" role="status" aria-live="polite">
            Cargando palabra...
          </div>
        )}
        {(status === 200 || status === 201) && !loading && (
          <div className="alert alert-success" role="status" aria-live="polite">
            Palabra procesada. El resultado es {palabraRespuesta}.
          </div>
        )}
      </form>
    </article>
  );
};
