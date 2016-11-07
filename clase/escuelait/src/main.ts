import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

import { sumar } from './util';

const nombre: string = "EscuelaIt";
const num1: number = 2;
const num2: number = 7;
var suma:number = sumar(num1, num2)