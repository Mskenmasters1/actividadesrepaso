import { IPersona } from "./persona.interface";

export interface ILoQueViene{
	status: number;
	informacion: IPersona;
}

export interface IError{
	status: number;
	msg: string;
}