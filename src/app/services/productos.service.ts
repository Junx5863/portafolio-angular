import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando = true;
  producto: ProductoInterface[] = [];

  productoFiltrado: ProductoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise<void>((resolve, reject) => {
      this.http
        .get(
          'https://portafolio---aangular-default-rtdb.firebaseio.com/productos_idx.json'
        )
        .subscribe((resp: any) => {
          this.producto = resp;
          setTimeout(() => {
            this.cargando = false;
          }, 2000);
          resolve();
        });
    });
  }

  getProducto(id: String) {
    return this.http.get(
      `https://portafolio---aangular-default-rtdb.firebaseio.com/productos/${id}.json`
    );
  }

  buscarProducto(termino: string) {
    if (this.producto.length === 0) {
      //CargarProductos
      this.cargarProductos().then(() => {
        //ejecuta despues de tener los productos
        this.filtrarProductos(termino);
      });
    } else {
      //aplicar filtro
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {

    this.productoFiltrado = [];

    termino = termino.toLowerCase();

    this.producto.forEach( prod => {
      const tituloLowe = prod.titulo.toLowerCase();

      if(prod.categoria.indexOf( termino ) >=0 || tituloLowe.indexOf(termino) >=0){
        this.productoFiltrado.push( prod );
      }

    });
  }
}
