import { MaestroModel, Movimiento, MaestroTipoModel } from './../datos.model';
// Importación de los decoradores Input y OutPut
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/** Es un componente simple que recibe datos y emite eventos
 * Pero que no usa servicios de datos
 */
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  // recibe datos vía propiedades
  /** propiedad para entrada de tipos de movimiento */
  @Input()
  tipos: MaestroModel[] = [];
  /** propiedad para entrada de categorias de movimiento */
  @Input() categorias: MaestroTipoModel[] = [];
  /** propiedad para entrada de un movimiento */
  @Input() movimiento: Movimiento;


  // emite eventos de cambio y de guardado
  /** propiedad para emitir el evento de guardado del movimiento actual */
  @Output() guardar: EventEmitter<Movimiento> = new EventEmitter<Movimiento>();
  /** propiedad para emitir el evento de cambio de tipo del movimiento actual */
  @Output() usuarioCambiarTipo: EventEmitter<number> = new EventEmitter<number>();

  // ya no se usa datos service
  // es un componente tonto ()
  constructor() { }

  ngOnInit() {  }
  
  // emisión de eventos para cambios o pedir guardar el movimiento
  /** cuando el usuario hace click en un radio button de tipo */
  usuarioCambioRadioButton() {
    this.usuarioCambiarTipo.emit(this.movimiento.tipo);
  }
  /** cuando el usuario hace click en el botón de guardado */
  guardarMovimiento() {
    this.guardar.emit(this.movimiento);
  }
}
