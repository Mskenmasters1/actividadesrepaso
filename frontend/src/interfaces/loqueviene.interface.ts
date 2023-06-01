import { IPersona } from "./persona.interface";

export interface ILoQueViene{
	status: number;
	informacion: IPersona | IPersona[];
}