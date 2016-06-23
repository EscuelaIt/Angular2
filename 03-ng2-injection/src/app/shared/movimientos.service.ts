/**  1  la funcion Injectable permite que un servicio sea usado por otro componente */
import { Injectable } from '@angular/core';

/** 2 uso la función para crear un decorador de la calse del servicio*/
@Injectable()
/** 3 clase de servicio con la lógica que estaba en el componente */  
export class MovimientosService {
  // las propiedades que antes tenía el componente ahora las tiene el servicio
  categoriasIngreso: string[] = ['Nómina', 'Venta', 'Interés', 'Impuesto']
  categoriasGasto: string[] = ['Hipoteca', 'Compra', 'Interés', 'Impuesto']
  movimientos: MovimientoModel[] = []
  ingresos: number = 0
  gastos: number = 0
  balance: number = 0
  
  constructor() { }

  // lo mismo ocurre con los métodos  
  guardarMovimiento(movimiento: MovimientoModel) {
    if (movimiento.tipo === 'Ingreso')
      this.ingresos += movimiento.importe
    else
      this.gastos += movimiento.importe
    this.balance = this.ingresos - this.gastos
    this.movimientos.push(Object.assign({}, movimiento))
  }

  ordenarPor(campo: string, sentidoOrden: number) {
    this.movimientos.sort((a, b) => a[campo] < b[campo] ? sentidoOrden : -1 * sentidoOrden)
  }  
}
// las clases de modelo también debe estar en zonas comunes
// TODO: mover clase de modelo a su propio fichero
@Injectable()
export class MovimientoModel {
  _id: string;
  tipo: string
  categoria: string
  fecha: Date
  importe: number
}
