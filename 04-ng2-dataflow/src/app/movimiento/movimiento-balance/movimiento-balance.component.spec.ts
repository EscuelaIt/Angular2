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
import { MovimientoBalanceComponent } from './movimiento-balance.component';

describe('Component: MovimientoBalance', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MovimientoBalanceComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MovimientoBalanceComponent],
      (component: MovimientoBalanceComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MovimientoBalanceComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MovimientoBalanceComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-movimiento-balance></app-movimiento-balance>
  `,
  directives: [MovimientoBalanceComponent]
})
class MovimientoBalanceComponentTestController {
}

