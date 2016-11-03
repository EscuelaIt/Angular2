import { Component,  Output, EventEmitter , OnInit } from '@angular/core';
import { MovimientosService, MovimientoModel, CapitalizarPipe } from '../../shared/';
import { ROUTER_DIRECTIVES} from '@angular/router'; 

@Component({
  moduleId: module.id,
  selector: 'cf-movimiento-lista',
  templateUrl: 'movimiento-lista.component.html',
  styleUrls: ['movimiento-lista.component.css', '../movimiento.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes:[CapitalizarPipe] // los pipes se registran igual que las directivas
})
export class MovimientoListaComponent implements OnInit {
  movimientos= []
  @Output() editarMovimiento: EventEmitter<MovimientoModel> = new EventEmitter()

  constructor(private movimientosService: MovimientosService) { }

  ngOnInit() {
    this.movimientosService.leerMovimientos()
      .subscribe(res => {
        this.movimientos = res
      })
  } 
  
  fecha(cadena) {
    return new Date(cadena)
  }

  editar(movimiento: MovimientoModel) {
    this.editarMovimiento.emit(movimiento)
  }
}
