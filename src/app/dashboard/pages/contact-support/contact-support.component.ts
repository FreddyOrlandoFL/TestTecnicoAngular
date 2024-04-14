import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { FormBuilder,FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';
import {NgxUiLoaderService} from   'ngx-ui-loader';
import { environment } from '../../../../environments/environment';
@Component({
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, NgxUiLoaderModule],
  templateUrl: './contact-support.component.html',
  styles: ``,
  selector: 'app-name-editor',
})

export  default class ContactSupportComponent {

    apiurl=environment.apiUrlMssql;

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
      /*const ngxUiLoaderConfig: NgxUiLoaderConfig = {
        bgsColor: '#ffcc48',
        bgsPosition: POSITION.bottomCenter,
        bgsSize: 40,
        bgsType: SPINNER.wanderingCubes,
        pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
        pbThickness:5, // progress bar thickness
        text: "Nuevo Contacto Agregado con exito...",
        pbColor:"#b12bf7",
        fgsType:"square-jelly-box"
     };*/
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
