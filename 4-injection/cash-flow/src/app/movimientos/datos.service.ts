import { MovimientosModule } from './../../../../../3-databinding/cash-flow/src/app/movimientos/movimientos.module';
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
  private tipos: MaestroModel[] = [
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
    return new Movimiento(
      new Date(Date.now()),
      0,
      this.tipos[0].id,
      this.getCategoriasPorTipo(this.tipos[0].id)[0].id
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
