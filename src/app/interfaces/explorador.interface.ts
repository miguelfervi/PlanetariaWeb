export interface Explorador{
  dni:string;
  nombre:string;
  apellido:string;
  correo:string;
  asignatura:string;
  vidas:number;
  recompensas:number;

  key$?:string;
}
