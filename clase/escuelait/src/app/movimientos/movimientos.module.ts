import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimientosComponent } from './movimientos.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ListaComponent } from './lista/lista.component';
import { SharedModule } from './../shared/shared.module';
import { FilaComponent } from './fila/fila.component';
import { DatosService } from './datos.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    MovimientosComponent,
    NuevoComponent,
    ListaComponent,
    FilaComponent],
  exports: [
    MovimientosComponent
  ],
  providers: [
    DatosService
  ]
})
export class MovimientosModule { }
