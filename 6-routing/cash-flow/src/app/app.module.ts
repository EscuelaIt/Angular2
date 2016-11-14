import { ContactoModule } from './contacto/contacto.module';
import { CashFlowRoutingModule } from './app-routing.module';
// objetos con utilidades comunes del framework
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
// importación del componente raíz, definido en esta misma carpeta
import { AppComponent } from './app.component';
// importación de un módulo de funcionalidad
import { MovimientosModule } from './movimientos/movimientos.module'
import { MovimientosComponent } from './movimientos/movimientos.component'
import { ContactoComponent } from './contacto/contacto.component';

// definir las rutas
const routes: Routes = [
  { path: '', component: MovimientosComponent },
  { path: 'contacto', component: ContactoComponent }
];

// decorador que define un módulo
@NgModule({
  declarations: [
    AppComponent
  ], // cosas declaradas en este módulo
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovimientosModule, // el módulo de movimientos,
    ContactoModule,
    RouterModule.forRoot(routes)
  ], // otros módulos que necesitamos para que este funcione
  providers: [] , // inyección de servicios comunes para la aplicación
  bootstrap: [AppComponent] // componente raíz para el arranque
})
// los módulos son clases contendoras 
// habitualmente con poco o ningún código
export class AppModule { }
