import { provideRouter, RouterConfig } from '@angular/router';

import { SeguridadComponent } from './seguridad';
import { MovimientosComponent } from './movimientos';
import { MovimientoComponent } from './movimiento';

export const appRoutes: RouterConfig = [
  { path: 'movimientos/:id', component: MovimientoComponent },
  { path: 'seguridad', component: SeguridadComponent },
  { path: '', component: MovimientosComponent, terminal: true },
];

export const APP_ROUTES = provideRouter(appRoutes);