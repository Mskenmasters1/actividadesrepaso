export interface IUsuario {
  email: string;
  password: string;
}

export interface IUsuarioResponse {
  usuario: IUsuario;
  msg: string;
}
