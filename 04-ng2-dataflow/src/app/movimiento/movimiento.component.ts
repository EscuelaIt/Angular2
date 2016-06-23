import { Component, OnInit } from '@angular/core';
import { MovimientosService, MovimientoModel } from '../shared/';
// Importamos subcomponentes
// La aplicación se comporta como un árbol de componentes
import {MovimientoEditorComponent} from './movimiento-editor'
import {MovimientoListaComponent} from './movimiento-lista'
import {MovimientoBalanceComponent} from './movimiento-balance'

@Component({
  moduleId: module.id,
  selector: 'movimiento',
  templateUrl: 'movimiento.component.html',
  styleUrls: ['movimiento.component.css'],
  providers: [MovimientosService],
  // los componentes importados se registran como directivas
  // esto permite usarlos en la vista
  directives:[MovimientoEditorComponent,MovimientoListaComponent, MovimientoBalanceComponent]
})

export class MovimientoComponent implements OnInit {
  // el componente principal cada vez tiene menor contenido lógico

  movimientoSeleccionado = null // para comunicar los subcomponentes  
  
  constructor(private movimientosService: MovimientosService) {
    
  }

  ngOnInit() {
    
  }

  alSeleccionarMovimiento(movimiento: MovimientoModel) {
    // este método se invoca cuando alguien selecciona un movimiento desde el subcomponente lista
    // el movimiento seleccionado se envía hacia el subcomponente de edición
    this.movimientoSeleccionado = movimiento
  }
}