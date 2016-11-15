import { MaestroModel, MaestroTipoModel, MovimientoModel, Movimiento } from './datos.model';
import { Injectable } from '@angular/core';
// Importar objetos de la librería http
import { Http, Response, RequestOptions, Headers } from '@angular/http';

/**
 * Programación reactiva con observables
 */

// permite la suscripción a cambios de un stream
import { Observable } from 'rxjs/Observable';
// se comporta como un obseervable y además permite la emisión de datos hacia un observable
import { Subject } from 'rxjs/Subject';


// decoración para marcarlo como inyectable
@Injectable()
export class DatosService {

  private urlBase: string = 'http://localhost:3030/api'
  private categorias: MaestroTipoModel[] = [];
  private movimientos: MovimientoModel[] = [];
  // comunicación de eventos mediante observables
  private movimientos$: Subject<MovimientoModel[]> = new Subject<MovimientoModel[]>();
  

  // Reclamar la dependencia sobre http  
  // Se ha registrado en el módulo raíz, se supone uso común a varios servicios
  constructor(private http: Http) {
  }


  getNuevoMovimiento(): MovimientoModel {
    return new Movimiento(
      new Date(Date.now()),
      0,
      0,
      0
    );
  }


  // Se devuelven Observables de tipos concretos   
  getTipos(): Observable<Response> {
    // las llamadas devuelven observables
    // ocultan la definción de la ruta y demás
    return this.http
      .get(`${this.urlBase}/pub/maestros/tipos`)
  }

  // Se devuelven Observables de tipos concretos   
  getCategorias(): Observable<Response> {
    // las llamadas devuelven observables
    // ocultan la definción de la ruta y demás
    return this.http
      .get(`${this.urlBase}/pub/maestros/categorias`)
  }

  setCategorias(categorias){
    this.categorias = categorias;
  }

  getCategoriasPorTipo( tipo): MaestroTipoModel[] {
    return this.categorias.filter(c => c.type === tipo);
  }

  postMovimiento(movimiento: Movimiento) {
    let movimientoClone: Movimiento = Object.assign({}, movimiento);
    this.movimientos.push(movimientoClone);
    // genera un nuevo valor en el observable
    this.movimientos$.next(this.movimientos);
  }

  getMovimientos$(): Observable<MovimientoModel[]> {
    // se comporta como un observable
    return this.movimientos$.asObservable();
  }

  // funciones auxiliares  
  getCategoriaBase = (tipoId) => this.getCategoriasPorTipo(tipoId)[0].id;
}
