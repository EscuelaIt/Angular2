import { Component } from '@angular/core';
import { MovimientoComponent } from './movimiento';

@Component({
  moduleId: module.id,
  selector: 'cash-flow-app',
  templateUrl: 'cash-flow.component.html',
  styleUrls: ['cash-flow.component.css'],
  directives:[MovimientoComponent]
})
export class CashFlowAppComponent {
  title = 'cash-flow works!';
}
