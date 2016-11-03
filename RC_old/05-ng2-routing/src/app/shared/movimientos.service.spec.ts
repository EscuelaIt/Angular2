/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MovimientosService } from './movimientos.service';

describe('Movimientos Service', () => {
  beforeEachProviders(() => [MovimientosService]);

  it('should ...',
      inject([MovimientosService], (service: MovimientosService) => {
    expect(service).toBeTruthy();
  }));
});
