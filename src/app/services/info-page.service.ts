import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InforPage } from '../interfaces/info-interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InforPage = {};
  cargada = false;

  constructor( private http: HttpClient ) { 

    //console.log("Servicio de infoPage Listo");

    //Leer archivo Json
    this.http.get('assets/data/data-page.json')
    .subscribe( ( resp: InforPage ) => {
      
      this.info = resp;
      this.cargada = true;
      console.log(resp.repositorio);
      
    
    }); 

   }
}
