import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment, APP_ROUTES } from './app/';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  APP_ROUTES,
]);

