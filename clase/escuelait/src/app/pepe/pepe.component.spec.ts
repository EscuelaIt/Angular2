/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PepeComponent } from './pepe.component';

describe('PepeComponent', () => {
  let component: PepeComponent;
  let fixture: ComponentFixture<PepeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PepeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
