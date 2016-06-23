import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
// importación de operadores de las reactive extensions
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { HttpToolsService } from './http-tools.service'

@Injectable()
export class MovimientosService {

  urlBase: string = 'http://localhost:3000/api'

  constructor(private http: Http, private httpToolsService: HttpToolsService) {
  }

  leerMaestros() {
    let options = this.httpToolsService.configurarCabeceras()
    // encadenado de operadores en un observable
    return this.http
      .get(`${this.urlBase}/pub/maestros`,options)
      .map(this.httpToolsService.obtenerDatos)
      .catch(this.httpToolsService.tratarErrores)
  }

  guardarMovimiento(movimiento) {
    let body = JSON.stringify(movimiento)
    let options = this.httpToolsService.configurarCabeceras()
    if (movimiento._id && movimiento._id !=='_') {
      return this.http
        .put(`${this.urlBase}/priv/movimientos/${movimiento._id}`, body, options)
        .catch(this.httpToolsService.tratarErrores)
    }
    else {
      return this.http
        .post(`${this.urlBase}/priv/movimientos`, body, options)
        .catch(this.httpToolsService.tratarErrores)
    }
  }

  leerMovimientos() {
    let options = this.httpToolsService.configurarCabeceras()
    return this.http
      .get(`${this.urlBase}/priv/movimientos`,options)
      .map(this.httpToolsService.obtenerDatos)
      .catch(this.httpToolsService.tratarErrores)
  }

  leerMovimientoPor_Id(_id) {
    let options = this.httpToolsService.configurarCabeceras()
    return this.http
      .get(`${this.urlBase}/priv/movimientos/${_id}`,options)
      .map(this.httpToolsService.obtenerDatos)
      .catch(this.httpToolsService.tratarErrores)
  }

  leerTotales() {
    let options = this.httpToolsService.configurarCabeceras()
    return this.http
      .get(`${this.urlBase}/priv/movimientos/totales`,options)
      .map(this.httpToolsService.obtenerDatos)
      .catch(this.httpToolsService.tratarErrores)
  }

  // TODO: Llevar a su propio servicio 
  registrar(credenciales) {
    // la llamda de seguridad debería devolvernos credenciales
    // parte de nuestra labor será guardarla para futuros usos
    let body = JSON.stringify(credenciales)
    let options = this.httpToolsService.configurarCabeceras()
    return this.http
        .post(`${this.urlBase}/pub/usuarios`, body, options)
        .map(this.httpToolsService.obtenerDatos)
        .map(this.httpToolsService.guardarCredenciales)
        .catch(this.httpToolsService.tratarErrores)
  }
}
@Injectable()
export class MovimientoModel {
  _id: string
  tipo: string
  categoria: string
  fecha: Date
  importe: number
}
