import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimientosComponent } from './movimientos.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ListaComponent } from './lista/lista.component';
import { SharedModule } from './../shared/shared.module';
import { FilaComponent } from './fila/fila.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [MovimientosComponent, NuevoComponent, ListaComponent, FilaComponent],
  exports: [MovimientosComponent]
})
export class MovimientosModule { }
