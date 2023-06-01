import { ChangeEvent, useEffect, useState } from "react";
import { ILoQueViene } from "./interfaces/loqueviene.interface";

export const Tercera = () => {
	const [nombre, setNombre] = useState<string>('');
	const [poblacion, setPoblacion] = useState<string>('');

const traer = async (ruta: string) => {
try {
	const data = await fetch(ruta);
	const informacion = await data.json();
	const status = data.status;
const HaLlegado: ILoQueViene = {
	status, informacion
}
return HaLlegado;
}
catch(e) {
	
}
}
const cambiaNombre = (e: ChangeEvent<HTMLInputElement>) => {
	setNombre(e.target.value);
};

const cambiaPoblacion = (e: ChangeEvent<HTMLInputElement>) => {
	setPoblacion(e.target.value);
};


const buscarPorNombre = () => {
	
}
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
</section>
<section role="search">
<h2>Buscador de poblaciones</h2>
<label htmlFor="poblacion">Población</label>
<input type="text" id="poblacion" value={poblacion} onChange={cambiaPoblacion} />
<button onClick={filtrarPorPoblacion}>Filtrar por población</button>
</section>
</>
);
};