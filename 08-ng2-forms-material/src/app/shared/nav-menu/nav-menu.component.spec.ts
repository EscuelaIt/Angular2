/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { NavMenuComponent } from './nav-menu.component';

describe('Component: NavMenu', () => {
  it('should create an instance', () => {
    let component = new NavMenuComponent();
    expect(component).toBeTruthy();
  });
});
