import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'dashboard',
    loadComponent : () => import('./dashboard/dashboard.component'),
    children:[
      {
        path:'contact-support',
        title:'Contacto de Soporte',
        loadComponent: () => import('./dashboard/pages/contact-support/contact-support.component')
      }
    ]
  },
  {
      path:'',
      redirectTo:'/dashboard/',
      pathMatch:'full'
  }
];
