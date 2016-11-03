import { Component,  Output, EventEmitter , OnInit } from '@angular/core';
import { MovimientosService, MovimientoModel } from '../../shared/';
import { ROUTER_DIRECTIVES} from '@angular/router'; // necesario para [routerLink]
@Component({
  moduleId: module.id,
  selector: 'cf-movimiento-lista',
  templateUrl: 'movimiento-lista.component.html',
  styleUrls: ['movimiento-lista.component.css', '../movimiento.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class MovimientoListaComponent implements OnInit {
  movimientos= []
  @Output() editarMovimiento: EventEmitter<MovimientoModel> = new EventEmitter()

  constructor(private movimientosService: MovimientosService) { }

  // El consumo de datos provenientes de observables
  // se hace en el ngOnInit para dar tiempo a que todo esté listo
  ngOnInit() {
    // Los observables emiten eventos a los que hay que suscribirse
    this.movimientosService.leerMovimientos()
      .subscribe(res => {
        // durante la suscripción se obtienen y transforman los datos
        if(res.status==200)
          this.movimientos = res.json() || []
        else
          console.log(JSON.stringify(res));
      })
  } 
  
  fecha(cadena) {
    return new Date(cadena)
  }

  editar(movimiento: MovimientoModel) {
    this.editarMovimiento.emit(movimiento)
  }
}
