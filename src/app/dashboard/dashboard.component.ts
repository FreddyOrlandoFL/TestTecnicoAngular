//import { ApiService } from './../services/api.services';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';

@Component({
  standalone: true,
  imports: [RouterModule,SidemenuComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {
  /*data : any [] = [];
  constructor(private apiService: ApiService){}
  ngOnInit(): void {
    this.llenarData();
  }
  llenarData(){
    this.apiService.getData().subscribe( data =>{
      this.data= data;
      console.log(this.data)
    })
  }*/
}
