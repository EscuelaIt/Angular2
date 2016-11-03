import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'cf-movimiento-balance',
  templateUrl: 'movimiento-balance.component.html',
  styleUrls: ['movimiento-balance.component.css','../movimiento.component.css']
})
export class MovimientoBalanceComponent {
  @Input() ingresos: number
  @Input() gastos: number
}
