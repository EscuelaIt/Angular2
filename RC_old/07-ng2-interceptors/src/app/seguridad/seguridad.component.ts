import { Component, OnInit } from '@angular/core';
import { MovimientosService } from '../shared/movimientos.service';

@Component({
  moduleId: module.id,
  selector: 'cf-seguridad',
  templateUrl: 'seguridad.component.html'
})
export class SeguridadComponent implements OnInit {
    
    usuario:any = { email:'', password:''}

    constructor(private movimientosService: MovimientosService){

    }

    ngOnInit(){

    }

    registrarUsuario(){
        console.log('Enviando credenciales');
        this.movimientosService
            .registrar(this.usuario)
            .subscribe(r=>{console.log(r);})
    }
}