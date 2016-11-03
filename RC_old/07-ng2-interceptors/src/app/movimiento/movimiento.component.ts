import { Component, OnInit } from '@angular/core';
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
export class MovimientoComponent implements OnInit {
  movimiento: MovimientoModel
  totales = {"ingresos":0,"gastos":0,"balance":0}
  constructor(private movimientosService: MovimientosService) {}

  ngOnInit() {
    this.movimientosService.leerTotales()
      .subscribe(res => {
        this.totales = res
        console.log(JSON.stringify(this.totales));
      })
  }

  alSeleccionarMovimiento(movimientoRecibidoDeMiHijo:MovimientoModel) {
    this.movimiento = movimientoRecibidoDeMiHijo
  }

  // TODO: get balance  
}
