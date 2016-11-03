import { Component } from '@angular/core';
/**  1 importación de componenetes externos */
import { MovimientoComponent } from './movimiento';

@Component({
  moduleId: module.id,
  selector: 'cash-flow-app',
  templateUrl: 'cash-flow.component.html',
  styleUrls: ['cash-flow.component.css'],
  directives:[MovimientoComponent] // 2 inyección del componente
})
export class CashFlowAppComponent {
  title = 'databinding works!';
}