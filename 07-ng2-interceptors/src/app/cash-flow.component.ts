import { Component } from '@angular/core';

import { AcercaDeComponent } from './+acerca-de';
import { MovimientoComponent } from './movimiento';
import { MovimientoEditorComponent } from './movimiento/movimiento-editor';
import { SeguridadComponent } from './seguridad'

import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
// importar la constante con los proveedores de http
import { HTTP_PROVIDERS } from '@angular/http';

import { MovimientosService, MovimientoModel, HttpToolsService } from './shared/';

@Component({
  moduleId: module.id,
  selector: 'cash-flow-app',
  templateUrl: 'cash-flow.component.html',
  styleUrls: ['cash-flow.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, MovimientosService, HttpToolsService]
  // registro de los proveedores de http
  // estarán disponibles para toda la aplicación
})
@Routes([
  {path: '/', component: MovimientoComponent},
  { path: '/acerca-de', component: AcercaDeComponent },
  { path: '/movimientos/:id', component: MovimientoEditorComponent },
  { path: '/seguridad' , component:SeguridadComponent}
])  
export class CashFlowAppComponent {
  title = 'cash-flow works!';
}
