import { ContactsResponse } from './../interfaces/req-response';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Contact } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

interface State {
  contacts: Contact[];
  loading: boolean;
}

@Injectable({
  providedIn :'root'
})


export class UsersService {
  apiurl='http://localhost:4000/api/contactos';
  private http= inject(HttpClient)

  #state = signal<State>({
    loading:true,
    contacts:[],
  });


  public contacts = computed(() => this.#state().contacts);
  public loading= computed(() => this.#state().loading);

  constructor(){
/*
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = {
      id: 0,
      nombre: 'Angel Lara',
      nombre_empresa: 'Code Motion',
      correo:  'angellara@gmail.com',
      telefono: '+584128905685',
      categoria:  'Ventas',
      mensaje:  'Hola Mundo',
    };
    this.http.post<any>(`${this.apiurl}`, body, { headers }).subscribe(data => {
        console.log(body);
    });
*/


    this.http.get(`${this.apiurl}`)
    .pipe( delay(1500) )
    .subscribe(data=>{
      console.log(data)
    });
  }
}
