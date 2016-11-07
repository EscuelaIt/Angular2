import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lista',
  //templateUrl: './lista.component.html',
  template: '<p>Hola desde la lista</p><fila></fila>',
  //styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
