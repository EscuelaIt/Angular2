import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { SharedModule } from './../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ClientesComponent],
  exports : [ClientesComponent]
})
export class ClientesModule { }
