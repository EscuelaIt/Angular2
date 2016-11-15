import { SeguridadService } from './seguridad.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent implements OnInit {

    usuario={};//:any = { email:'', password:''}

    constructor(private seguridadService: SeguridadService){

    }

    ngOnInit(){

    }

    registrarUsuario(){
        console.log('Enviando credenciales' + JSON.stringify(this.usuario));
        this.seguridadService
            .registrar(this.usuario)
            .subscribe(r=>{console.log(r);})
    }

}
