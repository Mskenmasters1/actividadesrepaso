import React from "react";
import ReactDOM from "react-dom/client";
import { EjemploActividad } from "./EjemploActividad";
import "bootstrap/dist/css/bootstrap.css";
import { Cuarta } from "./cuarta";
// import { Tercera } from "./Tercera";
import { Segunda } from "./Segunda";
import { Primera } from "./Primera";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<EjemploActividad />
		<Primera />
		<Segunda />
		{/* <Tercera /> */}
		<Cuarta />
	</React.StrictMode>
);
