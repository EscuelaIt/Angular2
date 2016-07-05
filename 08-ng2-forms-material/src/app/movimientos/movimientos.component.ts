import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators, AbstractControl  } from '@angular/forms';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_RADIO_DIRECTIVES, MdUniqueSelectionDispatcher } from '@angular2-material/radio';

@Component({
  moduleId: module.id,
  selector: 'cf-movimientos',
  templateUrl: 'movimientos.component.html',
  styleUrls: ['movimientos.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_LIST_DIRECTIVES,MD_RADIO_DIRECTIVES],
  providers: [FormBuilder,MdUniqueSelectionDispatcher]
})
export class MovimientosComponent implements OnInit {
  formulario: FormGroup;
  tipoControl: AbstractControl;
  conceptoControl: AbstractControl;
  fechaControl: AbstractControl;
  importeControl: AbstractControl;

  movimientos:any[] = [] ;  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      tipo: ['', Validators.required],
      concepto: ['', Validators.required],
      fecha: ['', Validators.required],
      importe: ['', Validators.required]
    });
    this.tipoControl = this.formulario.controls['tipo'];
    this.conceptoControl = this.formulario.controls['concepto'];
    this.fechaControl = this.formulario.controls['fecha'];
    this.importeControl = this.formulario.controls['importe'];
  }

  guardarMovimiento() {
    console.log(`Guardando: ${JSON.stringify(this.formulario.value)}`);
    this.movimientos.push(this.formulario.value);
  }

}
