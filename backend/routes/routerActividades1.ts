import { Router } from 'express';

import { ejemploGet, ejemploPost } from '../controllers/actividades1Controller';
import { primeraGet, primeraPost } from '../controllers/primeraController';

export const routerActividades1 = Router();

routerActividades1.get('/ejemplo/:email/:password', ejemploGet);
routerActividades1.post('/ejemplo', ejemploPost);

routerActividades1.get('/primera/:importe', primeraGet);
routerActividades1.post('/primera', primeraPost);