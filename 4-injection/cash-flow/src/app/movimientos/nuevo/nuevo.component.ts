import { MaestroModel, MovimientoModel, MaestroTipoModel } from './../datos.model';
import { DatosService } from './../datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  tipos: MaestroModel[] = [];
  categorias: MaestroTipoModel[] = [];
  movimiento: MovimientoModel;

  // las dependencias se declaran como parámetros del constructor  
  /** Este componente depende del objeto DatosService */
  constructor(private datosService: DatosService) {
    // No se escribe nada en el constructor ni en la clase
    // Los argumentos los convierte TypeScript en propiedades
   }

  /** Al iniciarse el componente se cargan los datos*/
  ngOnInit() {
    this.tipos = this.datosService.tipos;
    this.movimiento = this.datosService.getNuevoMovimiento();
    this.cambioTipo();
  }
  /** Al cambiar el tipo de un movimiento se recargan las categorías */
  cambioTipo() {
    this.categorias = this.datosService.getCategoriasPorTipo(this.movimiento.tipo);
    // Cambios en el tipo, crean cambios en la categoría
    this.movimiento.categoria = this.datosService.getCategoriasPorTipo(this.movimiento.tipo)[0].id;
  }
  /** Guarda un movimiento en el almacén */
  guardarMovimiento() {
    this.datosService.postMovimiento(this.movimiento);
  }
}
