import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'movimiento-balance',
  templateUrl: 'movimiento-balance.component.html',
  // hosa de estilo heredables
  styleUrls: ['movimiento-balance.component.css', '../movimiento.component.css']
})
export class MovimientoBalanceComponent implements OnInit {
  // los decoradores para declarar propiedades no siempre requieren parámetros
  @Input('ingresos') ingresos: number
  @Input() gastos: number

  constructor() {}

  ngOnInit() {
  }

}
