import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovimientosService, MovimientoModel } from '../../shared/';

@Component({
  moduleId: module.id,
  selector: 'movimiento-lista',
  templateUrl: 'movimiento-lista.component.html',
  // OJO
  // Se deben heredar las css
  styleUrls: ['movimiento-lista.component.css','../movimiento.component.css'] 
})
export class MovimientoListaComponent implements OnInit {
  sentidoOrden: number = 1
  constructor(private movimientosService: MovimientosService) { }
  // para comunicarse con el componente contenedor padre se usan eventos
  // Estos, se decoran con la funcion Output 
  // El contenedor se suscribe con ('seleccionarMovimiento')
  // Los eventos envían argumentos, en este caso el movimiento seleccionado
  @Output() seleccionarMovimiento: EventEmitter<MovimientoModel> = new EventEmitter()
  
  ngOnInit() {
  }
  // funciones de utilidad
  ordenarPor(campo: string) {
    this.sentidoOrden = -1 * this.sentidoOrden
    this.movimientosService.ordenarPor(campo, this.sentidoOrden)
  }
  fecha(cadena) {
    return new Date(cadena)
  }

  // métodos de acción  
  borrar(movimientoParaBorrar: MovimientoModel) {
    this.movimientosService.borrarMovimiento(movimientoParaBorrar)
  }
  seleccionar(movimientoSeleccionado: MovimientoModel) {
    // emisión del evento con su argumento
    this.seleccionarMovimiento.emit(movimientoSeleccionado)
  }
}
