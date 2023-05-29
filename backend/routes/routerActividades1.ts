import { Router } from 'express';

import { ejemploGet, ejemploPost } from '../controllers/actividades1Controller';

export const routerActividades1 = Router();

routerActividades1.get('/ejemplo/:email/:password', ejemploGet);
routerActividades1.post('/ejemplo', ejemploPost);