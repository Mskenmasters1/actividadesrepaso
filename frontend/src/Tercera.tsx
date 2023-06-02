import { ChangeEvent, useEffect, useState } from "react";
import { IError, ILoQueViene } from "./interfaces/loqueviene.interface";

export const Tercera = () => {
  const [nombre, setNombre] = useState<string>("");
  const [poblacion, setPoblacion] = useState<string>("");
const [resultadosNombre, setResultadosNombre] = useState<ILoQueViene | IError | null>(null);
const [resultadosPoblacion, setResultadosPoblacion] = useState<ILoQueViene | IError | null>(null);

  const 
  traer = async (ruta: string) => {
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
        msg: "No se ha podido realizar la búsqueda."
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
    const datosNombre = await traer(
      `http://localhost:3000/api/actividades1/tercera/${nombre}`
    );
    setResultadosNombre(datosNombre);
  };

  const filtrarPorPoblacion = async () => {
    const datosPoblacion = await traer(
      `http://localhost:3000/api/actividades1/tercera/${poblacion}`
    );
    setResultadosPoblacion(datosPoblacion);
  };

  useEffect(() => {
    document.title = "Tercera - Actividad de refuerzo";
  }, []);

  return (
    <>
      <h1>Tercera actividad</h1>
      <section role="search">
        <h2>Buscador de nombres</h2>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" value={nombre} onChange={cambiaNombre} />
        <button onClick={buscarPorNombre}>Buscar por nombre</button>
		{resultadosNombre?.status === 0 && (
			<p>{(resultadosNombre as IError).msg}</p>
		)}
		{resultadosNombre?.status === 404 && (
			<p>Esta persona no existe.</p>
		)}
		{resultadosNombre?.status === 200 && (

			<p>{`${(resultadosNombre as ILoQueViene).informacion.nombre} vive en ${(resultadosNombre as ILoQueViene).informacion.poblacion}.`}</p>
		)}
      </section>
      <section role="search">
        <h2>Buscador de poblaciones</h2>
        <label htmlFor="poblacion">Población</label>
        <input
          type="text"
          id="poblacion"
          value={poblacion}
          onChange={cambiaPoblacion}
        />
        <button onClick={filtrarPorPoblacion}>Filtrar por población</button>
      </section>
    </>
  );
};
