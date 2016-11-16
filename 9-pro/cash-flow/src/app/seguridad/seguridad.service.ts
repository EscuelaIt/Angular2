import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
/**
 * La libreria RxJS viene desglosada en operaciones
 * Hay que importarlas de forma individual
 */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
/**
 * Importación del servicicio de utilidad
 */
import { HttpToolsService } from '../shared/http-tools.service'

@Injectable()
export class SeguridadService {
  urlBase: string = 'http://localhost:3030/api';

  constructor(
    private http: Http, 
    private httpToolsService: HttpToolsService
) {
  }

  registrar(credenciales) {
    let ruta = `${this.urlBase}/pub/usuarios`;
    return this.comunicar(credenciales, ruta);
    /*
    // la llamada de seguridad debería devolvernos credenciales
    // parte de nuestra labor será guardarla para futuros usos
    let body = JSON.stringify(credenciales)
    console.log(body);
    let options = this.httpToolsService.configurarCabeceras()
    return this.http
        .post(`${this.urlBase}/pub/usuarios`, body, options)
        .map(this.httpToolsService.obtenerDatos)
        .map(this.httpToolsService.guardarCredenciales)
        .catch(this.httpToolsService.tratarErrores)*/
  }

  entrar(credenciales) {
    let ruta = `${this.urlBase}/pub/sesiones`;
    return this.comunicar(credenciales, ruta);
  }


  comunicar(credenciales, ruta) {
    // la llamada de seguridad debería devolvernos credenciales
    // parte de nuestra labor será guardarla para futuros usos
    let body = JSON.stringify(credenciales)
    console.log(body);
    let options = this.httpToolsService.configurarCabeceras()
    return this.http
        .post(ruta, body, options)
        .map(this.httpToolsService.obtenerDatos)
        .map(this.httpToolsService.guardarCredenciales)
        .catch(this.httpToolsService.tratarErrores)
  }
}

