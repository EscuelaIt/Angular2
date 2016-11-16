import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactoComponent],
  exports:[ContactoComponent]
})
export class ContactoModule { }
