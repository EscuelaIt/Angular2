import { Injectable } from '@angular/core';
import { Perro, Movimiento } from './datos.model'

@Injectable()
export class DatosService {

  public empresa: string = 'Escuela IT';
  
  public perro: Perro;

  constructor() { }

  crearMovimiento () : Movimiento {
    /*let movimiento = new Movimiento();
    movimiento.fecha = new Date(Date.now());
    movimiento.empresa = "Escuela It";*/
    let movimiento : Movimiento = {
      importe: 0,
      fecha: new Date(Date.now()),
      empresa: '',
      tipo: 0,
      categoria : 0
    }
    return movimiento;
  }  
}
