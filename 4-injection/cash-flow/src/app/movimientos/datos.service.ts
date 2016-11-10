// Importación directa de tipos
import { MaestroModel, MaestroTipoModel, MovimientoModel, Movimiento } from './datos.model';
import { Injectable } from '@angular/core';

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
  /** Tipos de MovimientosModule. Es un arrya de datos maestros */
  public tipos: MaestroModel[] = [
    { id: 1, text: "Ingreso" },
    { id: 2, text: "Gasto" }];
  /** Tipos de categorías. Es un arrya de datos maestros tipificados */
  private categoriasTipos: MaestroTipoModel[] = [
    { id: 1, text: "Nómina", type: 1 },
    { id: 2, text: "Ventas", type: 1 },
    { id: 3, text: "Intereses", type: 1 },
    { id: 4, text: "Hipoteca", type: 2 },
    { id: 5, text: "Compras", type: 2 },
    { id: 6, text: "Domicialiaciones", type: 2 },
    { id: 7, text: "Impuestos", type: 2 }];
  /** Almacén de movimientos en memoria */
  private movimientos: MovimientoModel[] = [];
  /** Emisor de eventos relacionados con el almacén de movimientos */
  private movimientos$: Subject<MovimientoModel[]> = new Subject<MovimientoModel[]>();
  constructor() { }
  /** Crea un nuevo movimiento */
  getNuevoMovimiento(): MovimientoModel {
    let fechaActual:Date = new Date(Date.now());
    let tipoBaseId:number = this.tipos[0].id;
    let categoriasBase: MaestroTipoModel[] = this.getCategoriasPorTipo(tipoBaseId);
    let categoriaBaseId:number = categoriasBase[0].id;
    return new Movimiento(
      fechaActual,
      0,
      tipoBaseId,
      categoriaBaseId
    );
  }
  /** Devuelve la lista de tipos de movimientos */
  getTipos(): MaestroModel[] {
    return this.tipos;
  }
  /** Devuelve la lista de categorias para un tipo concreto */
  getCategoriasPorTipo(tipo): MaestroTipoModel[] {
    return this.categoriasTipos.filter(c => c.type === tipo);
  }
  /** Guarda un movimiento en el almacén, y notifdica ese evento */
  postMovimiento(movimiento: Movimiento) {
    var movimientoClone: Movimiento = Object.assign({}, movimiento);
    this.movimientos.push(movimientoClone);
    // genera un nuevo valor en el observable
    this.movimientos$.next(this.movimientos);
  }
  /** Devuelve un observable q  ue notifica cambios en el almacén de movimientos */
  getMovimientos$(): Observable<MovimientoModel[]> {
    // se comporta como un observable
    return this.movimientos$.asObservable();
  }

}
