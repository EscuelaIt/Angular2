/** 
 * declaración de tipos para ayuda al programador
 * los datos suelen ser intanciados en el servidor
 * en esos casos basta declararlos como interfaces
 * */

export interface MaestroModel {
  id: number;
  text: string;
}
export interface MaestroTipoModel extends MaestroModel {
  type: number;
}

export interface MovimientoModel {
  _id?: any;
  fecha: Date;
  importe: number;
  tipo: number;
  categoria: number;
}

export class Movimiento implements MovimientoModel {
  _id?: any;
  
  constructor(
    public fecha: Date,
    public importe: number,
    public tipo: number,
    public categoria: number) {

  }
}
