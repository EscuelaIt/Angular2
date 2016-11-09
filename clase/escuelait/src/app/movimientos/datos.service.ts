import { Injectable } from '@angular/core';
import { Perro, Movimiento } from './datos.model'

@Injectable()
export class DatosService {

  public empresa: string = 'Escuela IT';
  
  public perro: Perro;

  constructor() { }

  crearMovimiento() {
    let movimiento = new Movimiento();
    movimiento.fecha = new Date(Date.now());
    movimiento.empresa = "Escuela It";
    return movimiento;
  }  
}
