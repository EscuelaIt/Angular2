import { Component } from '@angular/core';
// importación de componentes para configurar las rutas
// OJO
// el + inicial le indica a angular que puede efectuar un lazy loading !!!
// por ahora no tenemos carga diferida
// en próximas versiones no se harán estas importaciones
import { AcercaDeComponent } from './+acerca-de';
import { MovimientoComponent } from './movimiento';
import { MovimientoEditorComponent } from './movimiento/movimiento-editor';
// importación de librería router
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import { MovimientosService, MovimientoModel } from './shared/';

@Component({
  moduleId: module.id,
  selector: 'cash-flow-app',
  templateUrl: 'cash-flow.component.html',
  styleUrls: ['cash-flow.component.css'],
  // registro de las directivas y proveedores del router
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, MovimientosService]
})
// configuración de las rutas  
@Routes([
  // básicamente son una url y un componente
  {path: '/', component: MovimientoComponent},
  // las rutas asíncronas para lazy-loading serás con strings 
  // sin requerir la importación inmediata de componentes
  { path: '/acerca-de', component: AcercaDeComponent },
  // rutas con parámetros
  { path: '/movimientos/:id', component: MovimientoEditorComponent }
])  
export class CashFlowAppComponent {
  title = 'cash-flow works!';
}
