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
export class MovimientoEditorComponent implements OnInit {
  _id: string
  movimiento: MovimientoModel

  constructor(
    private router: Router,
    private movimientosService: MovimientosService
    ) {}

  ngOnInit() {
    // OnInit se ejcuta después de OnActivate
    if (this.movimiento) return
    this.movimiento = {
        _id: '',
        tipo: "Ingreso",
        categoria: "Nómina",
        fecha: new Date(),
        importe: 0
    }
    console.log('onInit:' + JSON.stringify(this.movimiento));
  }

  routerOnActivate(routeSegment: RouteSegment): void {
    this._id = routeSegment.getParam('id')    
    this.movimiento = this.movimientosService.obtenerMovimiento(this._id)
    console.log('routerOnActivate:' + JSON.stringify(this.movimiento));
  }
  
  guardarMovimiento() {
    // guardar el movimiento actual
    this.movimientosService.guardarMovimiento(this.movimiento)
    // Moverse a inicio (OJO: recarga la página)
    //this.router.navigate(['/acerca-de'])
  }  
}
