import { Component } from '@angular/core';
import { MovimientosService, MovimientoModel } from '../shared'
//import { MovimientoEditorComponent } from './movimiento-editor'
import { MovimientoListaComponent } from './movimiento-lista'
import { MovimientoBalanceComponent } from './movimiento-balance'

@Component({
  moduleId: module.id,
  selector: 'cf-movimiento',
  templateUrl: 'movimiento.component.html',
  styleUrls: ['movimiento.component.css'],
  directives: [MovimientoListaComponent, MovimientoBalanceComponent]
})
export class MovimientoComponent {
  movimiento: MovimientoModel

  constructor(private movimientosService: MovimientosService) {}

  alSeleccionarMovimiento(movimientoRecibidoDeMiHijo:MovimientoModel) {
    this.movimiento = movimientoRecibidoDeMiHijo
  }

}
