import React from "react";
import ReactDOM from "react-dom/client";
import { EjemploActividad } from "./EjemploActividad";
import "bootstrap/dist/css/bootstrap.css";
import { Cuarta } from "./cuarta";
import { Tercera } from "./Tercera";
import { Segunda } from "./Segunda";
import { Primera } from "./Primera";
import { IntlProvider } from "react-intl";

const locale = navigator.language;


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<IntlProvider locale={locale} >
			<EjemploActividad />
			<Primera />
			<Segunda />
			<Tercera />
			<Cuarta />
		</IntlProvider>
	</React.StrictMode>
);
