import { DatosService } from './../datos.service';
import { Component, OnInit } from '@angular/core';
import { Movimiento } from './../datos.model'
@Component({
  selector: 'nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  
  public movimiento: Movimiento;
  
  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.movimiento = this.datosService.crearMovimiento();
    this.movimiento.empresa = this.datosService.empresa;
  }

}
