import { MovimientoModel } from './../datos.model';
// Ya no requiere observables y librerías de datos
// import { Observable } from 'rxjs/Observable';
// import { DatosService } from './../datos.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  // Recibe los datos vía propiedad desde su contenedor
  /** Arrya de movimientos que debe pintar */
  @Input('movimientos') movimientos: MovimientoModel[];  

  // Sin dependencias  
  constructor() { }

  ngOnInit() {

  }

}
