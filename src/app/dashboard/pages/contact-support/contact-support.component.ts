import { UsersService } from './../../../services/users.services';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { FormBuilder,FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
/**import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '../../../shared/sidemenu/sidemenu.component';
* */
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import {NgxUiLoaderService} from   'ngx-ui-loader';
@Component({
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, NgxUiLoaderModule],
  templateUrl: './contact-support.component.html',
  styles: ``,
  selector: 'app-name-editor',
})
export  default class ContactSupportComponentz {
   // public UsersService = inject(UsersService);
   //apiurl='http://localhost:4000/api/contactos';
   apiurl='http://localhost:4000/api/mssql/contactos';

   private http= inject(HttpClient);
      contactFormControl = new FormControl('');
      contactForm = new FormGroup({
        nombre: new FormControl(''),
        nombre_empresa: new FormControl(''),
        correo: new FormControl(''),
        telefono:  new FormControl(''),
        categoria:  new FormControl(''),
        mensaje:  new FormControl('')
    });
    enviar( ) {
      // TODO: Use EventEmitter with form value
      console.warn(this.contactForm.value);
      const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
      const body = {
        id: 0,
        nombre: this.contactForm.value.nombre,
        nombre_empresa: this.contactForm.value.nombre_empresa,
        correo:  this.contactForm.value.correo,
        telefono: this.contactForm.value.telefono,
        categoria:  this.contactForm.value.categoria,
        mensaje:  this.contactForm.value.mensaje,
      };
      this.http.post<any>(`${this.apiurl}`, body, { headers }).subscribe(data => {
          console.log(body);
      });
      this.http.get(`${this.apiurl}`)
      .pipe( delay(1500) )
      .subscribe(data=>{
        console.log(data)
      });
      this.NgxUiLoaderService.start();
      setTimeout(() => {
        this.NgxUiLoaderService.stop();
      }, 1500);

      this.contactForm.reset();
    }


    constructor(private formBuilder: FormBuilder,private NgxUiLoaderService : NgxUiLoaderService) {}

    ngOnInit(): void {
      this.contactForm = this.formBuilder.group(
        {
          nombre: ['', Validators.required],
          nombre_empresa: ['', Validators.required],
          correo: ['', [Validators.required, Validators.email]],
          telefono: ['', Validators.required],
          categoria: ['', Validators.required],
          mensaje: ['', Validators.required],

        }
      );

    }

}
