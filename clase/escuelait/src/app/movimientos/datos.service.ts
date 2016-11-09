import { Injectable } from '@angular/core';

@Injectable()
export class DatosService {

  public empresa: string = 'Escuela IT';
  
  constructor() { }

  crearMovimiento() {
    return {
      importe: 0,
      fecha : new Date(Date.now())
    }
  }  
}
