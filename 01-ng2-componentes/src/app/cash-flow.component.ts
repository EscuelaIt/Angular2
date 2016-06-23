/** 1 función para decorar componentes */
import { Component } from '@angular/core';

/** 4  importación de un componente hijo llamado movimiento*/
import { MovimientoComponent } from './movimiento/movimiento.component'


/** 2 uso de la función decoradora para registrar el componente */
@Component({
  moduleId: module.id,
  selector: 'cash-flow-app', // el nombre del componente usado en el index
  templateUrl: 'cash-flow.component.html', // la vista asociada al componente, puede incluir compoentes hijos
  styleUrls: ['cash-flow.component.css'], // clases css específicas para este componente
  directives:[MovimientoComponent] // 5 Registro el movimiento como una directiva para la vista
})


/** 3 definción del componente
 * es una clase ES6, equivalente a una función controller ES5
 * sus propiedades y métodos son accesibles a la vista
 *  */  
export class CashFlowAppComponent {
  title = 'cash-flow works!';
}
