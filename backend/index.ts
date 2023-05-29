import express, { NextFunction } from 'express';
import { Request, Response, Express } from 'express';
import cors from 'cors';
import { routerActividades1 } from './routes/routerActividades1';
// Instanciamos express
const app: Express = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

// rutas
app.use('/api/actividades1', routerActividades1);

// Puesta en marcha
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});