import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovimientosModule } from './movimientos/movimientos.module';
import { ClientesModule } from './clientes/clientes.module';
import { PepeComponent } from './pepe/pepe.component'

/*
angular.module('app',[
    BrowserModule,
    FormsModule,
    HttpModule
  ])*/

@NgModule({
  declarations: [
    AppComponent,
    PepeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovimientosModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent, PepeComponent]
})
export class AppModule { }

/*
bootstrap: [AppComponent]
ng-app="app"
angular.bootstrap(document,['app'])
*/