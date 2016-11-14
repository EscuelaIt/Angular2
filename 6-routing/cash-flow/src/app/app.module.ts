// objetos con utilidades comunes del framework
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// importación del componente raíz, definido en esta misma carpeta
import { AppComponent } from './app.component';
// importación de un módulo de funcionalidad
import { MovimientosModule } from './movimientos/movimientos.module'
// decorador que define un módulo
@NgModule({
  declarations: [
    AppComponent
  ], // cosas declaradas en este módulo
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovimientosModule // el módulo de movimientos
  ], // otros módulos que necesitamos para que este funcione
  providers: [] , // inyección de servicios comunes para la aplicación
  bootstrap: [AppComponent] // componente raíz para el arranque
})
// los módulos son clases contendoras 
// habitualmente con poco o ningún código
export class AppModule { }
