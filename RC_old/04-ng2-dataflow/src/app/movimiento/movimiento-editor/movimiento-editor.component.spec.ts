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
import { MovimientoEditorComponent } from './movimiento-editor.component';

describe('Component: MovimientoEditor', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MovimientoEditorComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MovimientoEditorComponent],
      (component: MovimientoEditorComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MovimientoEditorComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MovimientoEditorComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-movimiento-editor></app-movimiento-editor>
  `,
  directives: [MovimientoEditorComponent]
})
class MovimientoEditorComponentTestController {
}

