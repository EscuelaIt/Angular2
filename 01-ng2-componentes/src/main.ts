/** importación de objetos, funciones etc... desde ficheros concretos o barriles */

/** bootstraping manual de la aplicación */
import { bootstrap } from '@angular/platform-browser-dynamic';
/** esta función activa angular en modo producción */
import { enableProdMode } from '@angular/core';
/** de nuestra carpeta barril app importamos dos cosas
 * CashFlowAppComponent : el componente principal
 * environment : una clase con settings que configuran la aplicación
 */
import { CashFlowAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}
/** equivalente a ng-app o al bootstrap(document, 'module') de 1.x */
bootstrap(CashFlowAppComponent);
// Este componente contien un selecto html llamado 'cash-flow-app'
// Esto hará que angular busque en el index.html algo así
// <cash-flow-app> </cash-flow-app>
