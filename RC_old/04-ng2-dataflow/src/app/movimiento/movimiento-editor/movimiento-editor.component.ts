import { Component, OnInit, Input } from '@angular/core';
import { MovimientosService, MovimientoModel } from '../../shared/';

@Component({
  moduleId: module.id,
  selector: 'movimiento-editor',
  templateUrl: 'movimiento-editor.component.html',
  styleUrls: ['movimiento-editor.component.css'],
  //providers: [MovimientosService]
  // OJO: 
  // para mantener un servicio singleton  
  // es fundamental incluirlo una sola vez
})
export class MovimientoEditorComponent implements OnInit {
  // los parámetros de entrada se decoran con la función Input
  // se usarán en las vistas contenedoras con la sintaxis [movimientoParaEditar]
  // en este caso, sustituye el habitual mvomiento nuevo por uno ya creado
  @Input('movimientoParaEditar') movimiento: MovimientoModel
  
  constructor(private movimientosService: MovimientosService) { }

  ngOnInit() {
    this.movimiento = this.nuevoMovimiento()
  }

  guardarMovimiento() {
    // guardar el movimiento actual, sea nuevo o no
    this.movimientosService.guardarMovimiento(this.movimiento)
    this.movimiento = this.nuevoMovimiento()
  }

  // esto bien podía estar en el servicio o ser inyectado ¿te atreves?
  nuevoMovimiento() {
    return {
        _id: '',
        tipo: "Ingreso",
        categoria: "Nómina",
        fecha: new Date(),
        importe: 0
      }
  }
}

