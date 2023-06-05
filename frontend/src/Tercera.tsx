import { ChangeEvent, useEffect, useState } from 'react';
import { IError, ILoQueViene } from './interfaces/loqueviene.interface';

export const Tercera = () => {
  const [nombre, setNombre] = useState<string>('');
  const [poblacion, setPoblacion] = useState<string>('');
  const [resultadosNombre, setResultadosNombre] = useState<ILoQueViene | IError | undefined>();
  const [resultadosPoblacion, setResultadosPoblacion] = useState<ILoQueViene | IError | undefined>();

  const traer = async (ruta: string) => {
    try {
      const data = await fetch(ruta);
      const informacion = await data.json();
      const status = data.status;
      const HaLlegado: ILoQueViene = {
        status,
        informacion
      };
      return HaLlegado;
    } catch (e) {
      const haLlegado: IError = {
        status: 0,
        msg: 'No se ha podido realizar la búsqueda.'
      };
      return haLlegado;
    }
  };

  const cambiaNombre = (e: ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const cambiaPoblacion = (e: ChangeEvent<HTMLInputElement>) => {
    setPoblacion(e.target.value);
  };

  const buscarPorNombre = async () => {
    const datosNombre = await traer(`http://localhost:3000/api/actividades1/tercera/${nombre}`);
    setResultadosNombre(datosNombre);
  };

  const filtrarPorPoblacion = async () => {
    const datosPoblacion = await traer(`http://localhost:3000/api/actividades1/tercera/${poblacion}`);
    setResultadosPoblacion(datosPoblacion);
  };

  useEffect(() => {
    document.title = 'Tercera - Actividad de refuerzo';
  }, []);

  return (
    <>
      <h1>Tercera actividad</h1>
      <section role="search">
        <h2>Buscador de nombres</h2>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" value={nombre} onChange={cambiaNombre} />
        <button onClick={buscarPorNombre}>Buscar por nombre</button>
        {resultadosNombre?.status === 0 && <p>{(resultadosNombre as IError).msg}</p>}
      </section>
      <section role="search">
        <h2>Buscador de poblaciones</h2>
        <label htmlFor="poblacion">Población</label>
        <input type="text" id="poblacion" value={poblacion} onChange={cambiaPoblacion} />
        <button onClick={filtrarPorPoblacion}>Filtrar por población</button>
        {resultadosPoblacion && (
          <div>
            {resultadosPoblacion?.status === 0 && <p>No se ha podido realizar la búsqueda.</p>}
            {(resultadosPoblacion as ILoQueViene).status === 200 &&
              (resultadosPoblacion as ILoQueViene).informacion.length === 0 && <p>No hay personas de esa población.</p>}
            {(resultadosPoblacion as ILoQueViene).status === 200 &&
              (resultadosPoblacion as ILoQueViene).informacion.length > 0 && (
                <>
                  <h3>{`${(resultadosPoblacion as ILoQueViene).informacion.length} resultados`}</h3>
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Población</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(resultadosPoblacion as ILoQueViene).informacion.map((x, i) => (
                        <tr key={i}>
                          <th scope="row">{x.nombre}</th>
                          <td>{x.poblacion}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
          </div>
        )}
      </section>
    </>
  );
};
