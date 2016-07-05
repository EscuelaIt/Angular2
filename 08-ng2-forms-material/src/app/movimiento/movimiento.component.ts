import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'cf-movimiento',
  templateUrl: 'movimiento.component.html',
  styleUrls: ['movimiento.component.css'],
  providers: [ ActivatedRoute ]
})
export class MovimientoComponent implements OnInit {

  movimiento: number

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.movimiento = +this.activatedRoute.snapshot.params['id'];
    console.log(this.movimiento)
  }

}
