export interface ApiResponse<T>{
  message?: string;
  data: T;
}

export interface IContact{
  id: number;
  nombre: string;
  nombre_empresa: string;
  correo:  string;
  telefono:  string;
  categoria:  string;
  mensaje:  string;
}
