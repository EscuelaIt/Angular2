import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovimientosModule } from './movimientos/';
import { ClientesModule } from './clientes/clientes.module';
import { HomeComponent } from './home/home.component'
import { PepeComponent } from './pepe/pepe.component';
import { SaludoComponent } from './saludo/saludo.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'pepe',
    component: PepeComponent
  },
  {
    path: 'jose',
    component: PepeComponent
  }
  ,
  {
    path: 'pepito',
    redirectTo: 'pepe'
  }
  ,
  {
    path: 'saludo',
    component : SaludoComponent
  }
  ,
  {
    path: 'saludo/:amigo',
    component : SaludoComponent
  }
  ,
  {
    path: '**',
    redirectTo: 'pepe'
    //component: HomeComponent
  }

    /*,children: [
      {
        path: 'trabajador', children: [
          {
             path: 'otro', component:  HomeComponent
          }
        ]
      },
      {
        path: 'vago', loadChildren: './otromodulo'
      }
    ]
  },
  {
    path: 'pepevago',
    loadChildren: './nombredelmodulo'
  }*/
];

// guards

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
    HomeComponent,
    SaludoComponent
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