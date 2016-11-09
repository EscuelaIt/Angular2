/** fichero para configurar el enrutado de un módulo
 *  en el proyecto inical no se usa
 *  es frecuente hacer la configuración directamente en el módulo raíz 
 */
// importar las herramientas necesarias
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// definir las rutas
const routes: Routes = [];
// configurar el modulo
@NgModule({
  imports: [RouterModule.forRoot(routes)], // rutas para el módulo raíz
  exports: [RouterModule], // esto es lo que el se verá desde el raíz
  providers: []
})
export class CacsFlowRoutingModule { }
