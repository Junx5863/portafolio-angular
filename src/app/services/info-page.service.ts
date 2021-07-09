import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { InforPage, InfoTeam } from '../interfaces/info-interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InforPage = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) { 

   this.cargarInfo();
   this.cargarEquipo();
   }
   
private cargarInfo(){

  //Leer Archivo JSon
  this.http.get('assets/data/data-page.json')
    .subscribe( ( resp: InforPage ) => {
      
      this.info = resp;
      this.cargada = true;
      console.log(resp.repositorio);
    }); 
  
  }

private cargarEquipo(){

  this.http.get('https://portafolio---aangular-default-rtdb.firebaseio.com/equipo.json')
  .subscribe( ( resp: any) => {
    this.equipo = resp;
    console.log(resp);
  })

}
}


