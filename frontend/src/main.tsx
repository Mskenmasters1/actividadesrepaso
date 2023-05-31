import React from 'react';
import ReactDOM from 'react-dom/client';
import { EjemploActividad } from './EjemploActividad';
import 'bootstrap/dist/css/bootstrap.css';
import { Cuarta } from './cuarta';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EjemploActividad />
    <Cuarta />
  </React.StrictMode>
);
