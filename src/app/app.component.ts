import { Component } from '@angular/core';

import { InfoPageService } from './services/info-page.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public _infoPageServices: InfoPageService,
               public productosService: ProductosService ){

    //Leer el archivo Json

  }


}
