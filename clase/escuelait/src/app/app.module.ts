import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovimientosModule } from './movimientos/';
import { ClientesModule } from './clientes/clientes.module';
import { HomeComponent } from './home/home.component'
import { PepeComponent } from './pepe/pepe.component'

const routes: Routes = [
  { path: '' , component : HomeComponent},
  { path: 'pepe' , component : PepeComponent}
];

/*
angular.module('app',[
    BrowserModule,
    FormsModule,
    HttpModule
  ])*/

@NgModule({
  declarations: [
    AppComponent,
    PepeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovimientosModule,
    ClientesModule,
    RouterModule.forRoot(routes)
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