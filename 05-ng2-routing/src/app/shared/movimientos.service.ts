import { Injectable } from '@angular/core';

@Injectable()
export class MovimientosService {
  categoriasIngreso: string[] = ['Nómina', 'Venta', 'Interés', 'Impuesto']
  categoriasGasto: string[] = ['Hipoteca', 'Compra', 'Interés', 'Impuesto']
  movimientos: MovimientoModel[] = []
  ingresos: number = 0
  gastos: number = 0
  balance: number = 0

  constructor() { }

  guardarMovimiento(movimiento: MovimientoModel) {
    console.log('guardando:' + JSON.stringify(movimiento));
    if (movimiento._id === '' || movimiento._id === '_') {
      movimiento._id= new Date().getTime().toString() 
      this.movimientos.push(Object.assign({}, movimiento))
    }
    else {
      let indice = this.movimientos.findIndex((m) => m._id === movimiento._id)
      this.movimientos[indice] = movimiento
    }
    console.log('db:' + JSON.stringify(this.movimientos));
    this.calcularBalance()
    console.log('balance:' + JSON.stringify(this.balance));
  }

  // nuevos métodos comunes a todos los componentes  
  borrarMovimiento(movimiento: MovimientoModel) {
    let indice = this.movimientos.findIndex((m) => m._id === movimiento._id)
    this.movimientos.splice(indice, 1)
    this.calcularBalance()
  }
  obtenerMovimiento(_id:string) {
    let movimientoEncontrado = this.movimientos.find(m => m._id == _id)
    console.log('encontrado:' + JSON.stringify(movimientoEncontrado) + ' para ' + _id);
    return movimientoEncontrado
  }
  ordenarPor(campo: string, sentidoOrden: number) {
    this.movimientos.sort((a, b) => a[campo] < b[campo] ? sentidoOrden : -1 * sentidoOrden)
  }
  calcularBalance() {
    this.ingresos = this.movimientos.reduce((anterior, actual) => actual.tipo === 'Ingreso' ? anterior + actual.importe : anterior, 0)
    this.gastos = this.movimientos.reduce((anterior, actual) => actual.tipo === 'Gasto' ? anterior + actual.importe : anterior, 0)
    this.balance = this.ingresos - this.gastos
  }

}

@Injectable()
export class MovimientoModel {
  _id: string;
  tipo: string
  categoria: string
  fecha: Date
  importe: number
}
