import { Component,  Output, EventEmitter } from '@angular/core';
import { MovimientosService, MovimientoModel } from '../../shared/';
import { ROUTER_DIRECTIVES} from '@angular/router'; // necesario para [routerLink]
@Component({
  moduleId: module.id,
  selector: 'cf-movimiento-lista',
  templateUrl: 'movimiento-lista.component.html',
  styleUrls: ['movimiento-lista.component.css', '../movimiento.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class MovimientoListaComponent {
  sentidoOrden: number = 1
  
  @Output() editarMovimiento: EventEmitter<MovimientoModel> = new EventEmitter()

  constructor(private movimientosService: MovimientosService) { }
    
  ordenarPor(campo: string) {
    this.sentidoOrden = -1 * this.sentidoOrden
    this.movimientosService.ordenarPor(campo, this.sentidoOrden)
  }
  fecha(cadena) {
    return new Date(cadena)
  }

  borrar(movimiento: MovimientoModel) {
    this.movimientosService.borrarMovimiento(movimiento)
  }
  editar(movimiento: MovimientoModel) {
    this.editarMovimiento.emit(movimiento)
  }
}
