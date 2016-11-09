import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  tipos: any[] = [
    { id: 1, text: "Ingreso" },
    { id: 2, text: "Gasto" }];
  categoriasTipos: any[] = [
    { id: 1, text: "Nómina", type: 1 },
    { id: 2, text: "Ventas", type: 1 },
    { id: 3, text: "Intereses", type: 1 },
    { id: 4, text: "Hipoteca", type: 2 },
    { id: 5, text: "Compras", type: 2 },
    { id: 6, text: "Domicialiaciones", type: 2 },
    { id: 7, text: "Impuestos", type: 2 }];
  categorias: any[] = [];

  movimiento: any = {};

  constructor() { }

  ngOnInit() {
    this.movimiento = {
      fecha: new Date(Date.now()),
      importe: 0,
      tipo: this.tipos[0].id,
      empresa: 'Academia Binaria'
    }
    this.cambioTipo();
  }

   cambioTipo() {
    this.categorias = this.categoriasTipos.filter(c => c.type === this.movimiento.tipo);
  }

  guardarMovimiento() {
    console.log(this.movimiento);
  }
}
