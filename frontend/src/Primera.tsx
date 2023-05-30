import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

export const EjemploActividad = () => {
  // Objetivo:
  // Tenemos un formulario que pide email y password
  // Se envían las credenciales a un servidor node y este devuelve si la información está dentro de un array de usuarios/passwords

  const [usuario, setUsuario] = useState<IUsuario>({
    email: '',
    password: ''
  });

  const [error, setError] = useState<boolean>(false);
  const [bienvenido, setBienvenido] = useState<boolean>(false);
  const [msgError, setMsgError] = useState<string>('');

  const { email, password } = usuario;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchServer();
  };

  const fetchServer = async (): Promise<void> => {
    try {
      // post
      const body = JSON.stringify({ email, password }); // el body debe ser un string
      const data = await fetch('http://localhost:3000/api/actividades1/ejemplo', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body
      });
      // get
      //const data = await fetch(`http://localhost:3000/api/actividades1/ejemplo/${email}/${password}`);
      const jsonRespuesta: IUsuarioResponse = await data.json();
      if (data.status === 401) {
        setError(true);
        setBienvenido(false);
        setMsgError(jsonRespuesta.msg);
      } else {
        setError(false);
        setBienvenido(true);
      }
    } catch (e) {
      setError(true);
      setBienvenido(false);
      setMsgError('Se ha producido un error');
    }
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, email: e.target.value });
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, password: e.target.value });
  };

  // Como el array de dependencias está vacío, esto se ejecutará la primera vez que se carga el componente.
useEffect(() => {
  // Establecemos el título de la página
  document.title = 'Ejeemplo - Actividad de refuerzo';
}, []);

  return (
    <>
      <h1>Ejemplo actividad</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className="form-control" id="email" type="email" value={email} onChange={onChangeEmail} />
          {/* useState nos permite controlar en todo momento el valor del email y del password para, por ejemplo, sacar mensajes */}
          {email.trim() === '' && <small>Email obligatorio</small>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input className="form-control" id="password" type="password" value={password} onChange={onChangePassword} />
          {password.trim() === '' && <small>Password obligatorio</small>}
        </div>
        <button className="btn btn-success" type="submit" disabled={email.trim() === '' || password.trim() === ''}>
          Iniciar sesión
        </button>
      </form>
      {error && (
        <div className="alert alert-danger" role="alert" aria-live="polite">
          {msgError}
        </div>
      )}
      {bienvenido && (
        <div className="alert alert-success" role="alert" aria-live="polite">
          Bienvenido!!!
        </div>
      )}
    </>
  );
};