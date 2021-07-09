import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

    cargando = true;
    producto: ProductoInterface[] = [];

  constructor( private http: HttpClient ) { 

    this.cargarProductos();
   }




  private cargarProductos(){

    this.http.get('https://portafolio---aangular-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (resp: any) => {

      console.log(resp);
      this.producto = resp;
      
      setTimeout(() =>{
        
      this.cargando = false;
      
    },2000);

    })

  }


}
