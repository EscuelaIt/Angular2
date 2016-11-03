import { Component, OnInit } from '@angular/core';
// para obtener acceso a los parámetros en el momento de la activación
import { OnActivate, Router, RouteSegment } from '@angular/router'

import { MovimientosService, MovimientoModel } from '../../shared/';

@Component({
  moduleId: module.id,
  selector: 'cf-movimiento-editor',
  templateUrl: 'movimiento-editor.component.html',
  styleUrls: ['movimiento-editor.component.css']
})
export class MovimientoEditorComponent implements OnActivate, OnInit {
  _id: string
  movimiento: MovimientoModel
  maestros = {}

  constructor(
    private router: Router,
    private movimientosService: MovimientosService
  ) {
    console.log("constructor: " );
    this.crearMovimiento()
  }

  routerOnActivate(routeSegment: RouteSegment): void {
    this._id = routeSegment.getParam('id')
    console.log("routerOnActivate: " + this._id);
    if (this._id !== '_') {
      this.movimientosService
        .leerMovimientoPor_Id(this._id)
        .subscribe(res => {
          this.movimiento = res;
        })
    }
  }

  ngOnInit() {
    console.log("ngOnInit: " );
    // La carga de maestros al iniciarse el componente
    this.movimientosService
      .leerMaestros()
      .subscribe(res => {
        this.maestros = res
        console.log(JSON.stringify(this.maestros));
      })
    //if (this.movimiento) this.crearMovimiento()
    console.log('onInit:' + JSON.stringify(this.movimiento));
  }



  guardarMovimiento() {
    // al enviar información también recibimos un observable
    // debemos suscribirnos para conocer el resultado
    this.movimientosService
      .guardarMovimiento(this.movimiento)
      .subscribe(res => {
        this.router.navigate(['/'])
        return false
      })
  }

  crearMovimiento(): void {
    this.movimiento = {
      _id: "_",
      tipo: "Ingreso",
      categoria: "Nómina",
      fecha: new Date(),
      importe: 0
    }
  }
}
