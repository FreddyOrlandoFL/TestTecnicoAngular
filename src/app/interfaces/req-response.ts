import { NumberValueAccessor } from "@angular/forms";

export interface ContactsResponse{
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Contact [];
  support: Support;
}

export interface Contact{
  id: number;
  nombre: string;
  nombre_empresa: string;
  correo:  string;
  telefono:  string;
  categoria:  string;
  mensaje:  string;
}

export interface Support{
  url:  string;
  text:  string;
}


