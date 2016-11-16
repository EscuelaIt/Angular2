import { SeguridadService } from './seguridad.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent implements OnInit {

    usuario={};//:any = { email:'', password:''}
    mensaje = "";
    constructor(private seguridadService: SeguridadService){
    }

    ngOnInit(){
    }

    registrarUsuario(){
        console.log('Enviando credenciales apara registro: ' + JSON.stringify(this.usuario));
        this.seguridadService
            .registrar(this.usuario)
            .subscribe(
                r=>{
                    console.log(r);
                }, 
                e=>{
                    this.mostrarError(e);
                })
    }

    entrarUsuario(){
        console.log('Enviando credenciales para entrada: ' + JSON.stringify(this.usuario));
        this.mensaje="validando...";
        this.seguridadService
            .entrar(this.usuario)
            .subscribe(
                r=>{
                    console.log(r);
                }, 
                e=>{
                    this.mostrarError(e);
                })
    }

    mostrarError(e){
        this.mensaje="ERROR";
        console.error(e);
    }
}
