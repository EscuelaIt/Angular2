/** 
 * declaración de tipos para ayuda al programador
 * los datos suelen ser intanciados en el servidor
 * en esos casos basta declararlos como interfaces
 * */

/** Un tipo de datos para datos maestros simples*/
export interface MaestroModel{
  /** identificador*/
  id: number;
  /** texto asociado */
  text: string;
}
/** Interfaz extendida para cotegorizar los tipos */
export interface MaestroTipoModel extends MaestroModel{
  /** Tipo para categorizar datos maestros */
  type: number;
}

/** Interfaz que cumplen los objetos Movimiento */
export interface MovimientoModel{
  fecha: Date;
  importe: number;
  tipo: number;
  categoria: number;
}
/** Clase para crear objetos de tipo Movimiento */
export class Movimiento implements MovimientoModel{
  constructor(
    public fecha: Date,
    public importe: number,
    public tipo: number,
    public categoria: number) {
    
  }
}