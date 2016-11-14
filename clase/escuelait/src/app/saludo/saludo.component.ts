import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  amigo: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let parametros$: Observable<any> = this.activatedRoute.params;

    parametros$.subscribe(parametros => {
      this.amigo = parametros['amigo'] || 'anónimo';
    });
  }

}
