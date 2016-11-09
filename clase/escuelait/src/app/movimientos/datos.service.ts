import { Injectable } from '@angular/core';
import { Perro } from './datos.model'

@Injectable()
export class DatosService {

  public empresa: string = 'Escuela IT';
  
  public perro: Perro;

  constructor() { }

  crearMovimiento() {
    return {
      importe: 0,
      fecha : new Date(Date.now())
    }
  }  
}
