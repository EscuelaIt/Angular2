import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators, AbstractControl  } from '@angular/forms';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
@Component({
  moduleId: module.id,
  selector: 'cf-seguridad',
  templateUrl: 'seguridad.component.html',
  styleUrls: ['seguridad.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES,MD_BUTTON_DIRECTIVES,MD_INPUT_DIRECTIVES],
  providers: [FormBuilder]
})
export class SeguridadComponent implements OnInit {
  formulario: FormGroup;
  emailControl: AbstractControl;
  passwordControl: AbstractControl;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
    this.emailControl = this.formulario.controls['email'];
    this.passwordControl = this.formulario.controls['password'];
  }

  validarUsuario() {
    console.log(`Validando: ${JSON.stringify(this.formulario.value)}`);
  }
  registrarUsuario() {
    console.log(`Registrando: ${JSON.stringify(this.formulario.value)}`);
  }
}
