import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HolaMundoAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(HolaMundoAppComponent);

