/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilaComponent } from './fila.component';

describe('FilaComponent', () => {
  let component: FilaComponent;
  let fixture: ComponentFixture<FilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
