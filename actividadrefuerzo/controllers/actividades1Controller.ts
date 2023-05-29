import { Request, Response } from 'express';
import { IUsuario } from '../interfaces/usuario.interface';

const usuarios: IUsuario[] = [
  {
    email: 'juan@google.com',
    password: '123456'
  },
  {
    email: 'felipe@google.com',
    password: '654321'
  },
  {
    email: 'ana@google.com',
    password: '123321'
  }
];

export const ejemploGet = async (req: Request, res: Response) => {
  const { email, password } = req.params;
  const usuario = usuarios.find((x) => x.email === email && x.password === password);
  if (!usuario) {
    res.status(401).json({
      usuario: '',
      msg: 'Credenciales erróneas'
    });
  } else {
    res.status(200).json({
      usuario,
      msg: 'Credenciales correctas'
    });
  }
};

export const ejemploPost = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const usuario = usuarios.find((x) => x.email === email && x.password === password);
  if (!usuario) {
    res.status(401).json({
      usuario: '',
      msg: 'Credenciales erróneas'
    });
  } else {
    res.status(200).json({
      usuario,
      msg: 'Credenciales correctas'
    });
  }
};
