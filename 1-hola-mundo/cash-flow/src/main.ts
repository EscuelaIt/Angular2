// importaciones de dependencias TypeScript al estilo ES6
// primero los básicos para compatibilidad con navegadores
import './polyfills.ts';
// luego cosas de Angular
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
// después nuestro código, empezando por la configuración
import { environment } from './environments/environment';
// y por último la aplicación a leída desde el módulo raíz, llamado app por convenio.
import { AppModule } from './app/';

// condiciones para ejecutar en modo desarrollo o producción
if (environment.production) {
  enableProdMode();
}
// arranque de la aplicación invocando al módulo raíz
platformBrowserDynamic().bootstrapModule(AppModule);