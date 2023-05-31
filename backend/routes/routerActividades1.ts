import { Router } from 'express';

import { ejemploGet, ejemploPost } from '../controllers/actividades1Controller';
import { primeraGet, primeraPost } from '../controllers/primeraController';
import { segundaGet } from '../controllers/segundaController';
import { getPorNombre, getPorPoblacion } from '../controllers/terceraController';
import { cuartaGet } from '../controllers/cuartaController';

export const routerActividades1 = Router();

routerActividades1.get('/ejemplo/:email/:password', ejemploGet);
routerActividades1.post('/ejemplo', ejemploPost);

routerActividades1.get('/primera/:importe', primeraGet);

routerActividades1.get('/segunda/:palabra', segundaGet);

routerActividades1.get('/tercera/:nombre', getPorNombre);
routerActividades1.get('/tercera/:poblacion', getPorPoblacion);

routerActividades1.get('/cuarta/:aleatorio', cuartaGet);
