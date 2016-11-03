import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CashFlowAppComponent } from '../app/cash-flow.component';

beforeEachProviders(() => [CashFlowAppComponent]);

describe('App: CashFlow', () => {
  it('should create the app',
      inject([CashFlowAppComponent], (app: CashFlowAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'cash-flow works!\'',
      inject([CashFlowAppComponent], (app: CashFlowAppComponent) => {
    expect(app.title).toEqual('cash-flow works!');
  }));
});
