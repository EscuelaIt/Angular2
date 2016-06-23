import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MovimientoListaComponent } from './movimiento-lista.component';

describe('Component: MovimientoLista', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MovimientoListaComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MovimientoListaComponent],
      (component: MovimientoListaComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MovimientoListaComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MovimientoListaComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-movimiento-lista></app-movimiento-lista>
  `,
  directives: [MovimientoListaComponent]
})
class MovimientoListaComponentTestController {
}

