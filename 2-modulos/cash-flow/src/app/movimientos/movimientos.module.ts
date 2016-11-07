import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Importae un componentes de este módulo */
import { MovimientosComponent } from './movimientos.component';
import { ListaComponent } from './lista/lista.component';
import { NuevoComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],// dependencias de otros módulos
  declarations: [
    MovimientosComponent,
    ListaComponent,
    NuevoComponent
  ],// Componentes que se declara en el módulo de movimientos
  exports: [
    MovimientosComponent
  ] // exporta el componente que quieras importarlo desde otros módulos
})
export class MovimientosModule { }

/** To Do: comprobar exportaciones e importaciones */