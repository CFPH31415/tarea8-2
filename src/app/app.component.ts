import { Component } from '@angular/core';
import { onErrorResumeNext } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datos: any = [{
    nombre: 'Carlos',
    apellido:'Portillo',
    edad:25
  }];
  registrarDato(nombre:string, apellido:string, edad:string){
  if(nombre.length && apellido.length && edad.length ){
    this.datos.push({
      nombre,apellido,edad
    });
  }else{
   this.datos.push
    "error"
   }}
  }
