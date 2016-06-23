import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HolaMundoAppComponent } from '../app/hola-mundo.component';

beforeEachProviders(() => [HolaMundoAppComponent]);

describe('App: HolaMundo', () => {
  it('should create the app',
      inject([HolaMundoAppComponent], (app: HolaMundoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'hola-mundo works!\'',
      inject([HolaMundoAppComponent], (app: HolaMundoAppComponent) => {
    expect(app.title).toEqual('hola-mundo works!');
  }));
});
