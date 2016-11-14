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

  private tipos: MaestroModel[] = [
    { id: 1, text: 'Ingreso' },
    { id: 2, text: 'Gasto' }];
  private categoriasTipos: MaestroTipoModel[] = [
    { id: 1, text: 'Nómina', type: 1 },
    { id: 2, text: 'Ventas', type: 1 },
    { id: 3, text: 'Intereses', type: 1 },
    { id: 4, text: 'Hipoteca', type: 2 },
    { id: 5, text: 'Compras', type: 2 },
    { id: 6, text: 'Domicialiaciones', type: 2 },
    { id: 7, text: 'Impuestos', type: 2 }];
  private movimientos: MovimientoModel[] = [];
  // comunicación de eventos mediante observables
  private movimientos$: Subject<MovimientoModel[]> = new Subject<MovimientoModel[]>();
  constructor() { }

  getNuevoMovimiento(): MovimientoModel {
    return new Movimiento(
      new Date(Date.now()),
      0,
      this.getTipoBase(),
      this.getCategoriaBase(this.getTipoBase())
    );
  }

  getTipos(): MaestroModel[] {
    return this.tipos;
  }

  getCategoriasPorTipo(tipo): MaestroTipoModel[] {
    return this.categoriasTipos.filter(c => c.type === tipo);
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
  private getTipoBase = () => this.tipos[0].id;
  getCategoriaBase = (tipoId) => this.getCategoriasPorTipo(tipoId)[0].id;
}
