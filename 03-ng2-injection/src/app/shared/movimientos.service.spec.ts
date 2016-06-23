import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { MovimientosService } from './movimientos.service';

describe('Movimientos Service', () => {
  beforeEachProviders(() => [MovimientosService]);

  it('should ...',
      inject([MovimientosService], (service: MovimientosService) => {
    expect(service).toBeTruthy();
  }));
});
