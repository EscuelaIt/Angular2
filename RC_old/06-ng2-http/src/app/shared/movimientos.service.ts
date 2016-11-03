import { Injectable } from '@angular/core';
// Importar objetos de la librería http
import { Http, Response, RequestOptions, Headers } from '@angular/http';
// Importar la clase Observable de la librería Reactive Extensions
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class MovimientosService {
  // debemos acostumbrarnos a que el api no esté junto a los ficheros
  urlBase: string = 'http://localhost:3000'

  // Reclamar la dependencia sobre http  
  // Se registra en la raíz, pues se le supone un uso común a varios objetos
  constructor(private http: Http) {
  }

  // Se devuelven Observables de tipos concretos   
  leerMaestros(): Observable<Response> {
    // las llamadas devuelven observables
    // ocultan la definción de la ruta y demás
    return this.http.get(`${this.urlBase}/maestros`)
  }
  
  guardarMovimiento(movimiento): Observable<Response> {
    // Los envíos de información deben configurarse a mano
    // esto es fácilmente generalizable y reutilizable
    let body = JSON.stringify(movimiento)
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })
    // declarar la llamada y retornar el observable
    if (movimiento._id && movimiento._id!=='_') {
      return this.http
        .put(`${this.urlBase}/movimientos/${movimiento._id}`, body, options)
    }
    else {
      return this.http
        .post(`${this.urlBase}/movimientos`, body, options)
    }
  }

  // El resto de llamadas son simples copias de las anteriores
  leerMovimientos(): Observable<Response> {
    return this.http
      .get(`${this.urlBase}/movimientos`)
  }
  leerMovimientoPor_Id(_id): Observable<Response> {
    return this.http
      .get(`${this.urlBase}/movimientos/${_id}`)
  }
  leerTotales() : Observable<Response> {
    return this.http
      .get(`${this.urlBase}/movimientos/totales`)
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
